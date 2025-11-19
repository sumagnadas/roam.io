from rest_framework import serializers

from .models import Event, LocalGuide, Place, Review


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = "__all__"


class PlaceSerializer(serializers.ModelSerializer):
    reviews = ReviewSerializer(many=True, read_only=True)

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
            "reviews_cnt",
            "place_type",
            "image",
        ]


class PlacesSerializer(serializers.ModelSerializer):
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
