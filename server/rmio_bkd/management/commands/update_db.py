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


class Command(BaseCommand):
    help = "Updates the database with new info after fetching it from the individual sites."

    def handle(self, *args, **options):
        from rmio_bkd.models import Place, Review

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

                    obj, created = Place.objects.get_or_create(
                        id=place_id,
                        name=name,
                        defaults={"rating": rating},
                        address=address,
                    )
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
        self.stdout.write(self.style.SUCCESS("Database updated successfully."))
