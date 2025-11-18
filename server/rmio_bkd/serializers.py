from rest_framework import serializers

from .models import Place, Review


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
        ]


class PlacesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Place
        fields = ["id", "name", "rating", "styles"]
