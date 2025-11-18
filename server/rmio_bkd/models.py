from django.db import models


class Place(models.Model):
    name = models.CharField()
    id = models.CharField(
        primary_key=True, max_length=255, unique=True, editable=False, null=False
    )
    rating = models.FloatField(default=0.0)
    phone = models.CharField(max_length=50, blank=True, null=True, default="N/A")
    address = models.CharField(max_length=255, blank=True, null=True)
    styles = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.name


class Review(models.Model):
    id = models.CharField(
        primary_key=True, max_length=500, unique=True, editable=False, null=False
    )
    place = models.ForeignKey(Place, on_delete=models.CASCADE, related_name="reviews")
    author_name = models.CharField(max_length=255)
    rating = models.FloatField(default=0.0)
    text = models.TextField()

    def __str__(self):
        return f"Review by {self.author_name} for {self.place.name}"
