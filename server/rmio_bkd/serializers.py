from rest_framework import serializers

from .models import Event, LocalGuide, Place, Review


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = "__all__"


class PlaceSerializer(serializers.ModelSerializer):
    user_reviews = serializers.SerializerMethodField()
    id = serializers.CharField()
    name = serializers.CharField(max_length=255)
    rating = serializers.FloatField()
    styles = serializers.CharField()
    phone = serializers.CharField()
    address = serializers.CharField()
    badges = serializers.SerializerMethodField()
    reviews = serializers.IntegerField(source="reviews_cnt")
    type = serializers.CharField(source="place_type")
    image = serializers.URLField()
    isHiddenGem = serializers.BooleanField(source="is_hidden_gem")
    description = serializers.CharField(source="place_type")

    class Meta:
        model = Place
        fields = [
            "id",
            "name",
            "rating",
            "styles",
            "phone",
            "address",
            "badges",
            "reviews",
            "user_reviews",
            "image",
            "type",
            "isHiddenGem",
            "description",
        ]

    def get_user_reviews(self, obj):
        reviews = Review.objects.filter(place=obj)
        return ReviewSerializer(reviews, many=True).data

    def get_badges(self, obj: Place):
        badges = obj.badges.split(", ")
        return badges


class PlacesSerializer(serializers.ModelSerializer):
    id = serializers.CharField()
    name = serializers.CharField(max_length=255)
    rating = serializers.FloatField()
    styles = serializers.CharField()

    class Meta:
        model = Place
        fields = ["id", "name", "rating", "styles"]


class EventSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField(max_length=255)
    type = serializers.CharField(source="event_type", max_length=100)
    image = serializers.URLField()
    date = serializers.DateField(format="%b %d, %Y")
    time = serializers.TimeField(format="%I:%M %p")
    location = serializers.CharField(max_length=255)
    price = serializers.CharField(max_length=50)
    isTrending = serializers.BooleanField()
    tickets = serializers.CharField(max_length=100)

    class Meta:
        model = Event
        fields = [
            "id",
            "name",
            "event_type",
            "image",
            "date",
            "time",
            "location",
            "price",
            "isTrending",
            "tickets",
        ]


class LocalGuideSerializer(serializers.ModelSerializer):
    class Meta:
        model = LocalGuide
        fields = "__all__"
