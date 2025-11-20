import json

from django.core.management.base import BaseCommand, CommandError

styles = [
    "romantic",
    "relaxed",
    "curious",
    "adventurous",
    "cultural",
    "scenic",
    "foodie",
    "energetic",
]

badges = json.load(open("badges.json"))


class Command(BaseCommand):
    help = "Updates the database with new info after fetching it from the individual sites."

    def handle(self, *args, **options):
        from rmio_bkd.models import Event, LocalGuide, Place, Review

        for style in styles:
            with open(f"serpapi_results/{style}_detailed.json", "r") as f:
                data = json.load(f)
                for place in data:
                    place_info = place["place_results"]
                    place_id = place_info["place_id"]
                    name = place_info.get("title") or place.get("name")
                    rating = float(place_info.get("rating", 0))
                    reviews = place_info.get("user_reviews", {}).get(
                        "most_relevant", []
                    )
                    address = place_info.get("address", "")
                    place_type = (
                        place_info.get("type")[0]
                        if place_info.get("type", [])
                        else "N/A"
                    )
                    reviews_cnt = place_info.get("reviews", 0)
                    image = place_info.get("thumbnail", "")
                    is_hidden_gem = rating >= 4.5 and reviews_cnt <= 50

                    obj, created = Place.objects.get_or_create(
                        id=place_id,
                        name=name,
                        defaults={"rating": rating},
                        address=address,
                        reviews_cnt=reviews_cnt,
                        place_type=place_type,
                        image=image,
                        is_hidden_gem=is_hidden_gem,
                    )
                    if created or not obj.badges:
                        exts = place_info.get("extensions", [])
                        badges_to_add = []
                        for ext in exts:
                            for ext_key, ext_list in ext.items():
                                badges_to_add.extend(
                                    [i for i in ext_list if i in badges]
                                )
                        obj.badges = ", ".join(badges_to_add)
                        obj.save()
                    styles_list = obj.styles.split(", ") if obj.styles else []
                    if style not in styles_list:
                        styles_list.append(style)
                        obj.styles = ", ".join(styles_list)
                        obj.save()
                    for review in reviews:
                        author_name = review.get("username", "Anonymous")
                        review_rating = float(review.get("rating", 0))
                        rev_desc = review.get("description", "")
                        link: str = review.get("link", "")
                        link = link.split("data=")[-1].split("?hl=")[0]
                        Review.objects.get_or_create(
                            id=link,
                            place=obj,
                            author_name=author_name,
                            rating=review_rating,
                            text=rev_desc,
                        )
            self.stdout.write(
                self.style.SUCCESS(f"Updated database for style: {style}")
            )
        with open("events.json") as f:
            events_data = json.load(f)
            for event in events_data:
                event["event_type"] = event.pop("type")
                Event.objects.get_or_create(**event)
        with open("guides.json") as f:
            guides_data = json.load(f)
            for guide in guides_data:
                guide["languages"] = ", ".join(guide.get("languages"))
                guide["specialties"] = ", ".join(guide.get("specialties"))
                LocalGuide.objects.get_or_create(**guide)
        self.stdout.write(self.style.SUCCESS("Database updated successfully."))
