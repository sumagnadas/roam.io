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
    badges = models.CharField(blank=True, null=True)
    reviews_cnt = models.IntegerField(default=0)
    place_type = models.CharField(max_length=100, blank=True, null=True)
    image = models.URLField(blank=True, null=True)
    is_hidden_gem = models.BooleanField(default=False)

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


class Event(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    event_type = models.CharField(max_length=100)
    image = models.URLField()
    date = models.DateField()
    time = models.TimeField()
    location = models.CharField(max_length=255)
    price = models.CharField(max_length=50)
    tickets = models.CharField(max_length=100)
    isTrending = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.name} on {self.date} at {self.time}"


class LocalGuide(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    rating = models.FloatField(default=0.0)
    reviews = models.IntegerField(default=0)
    tours = models.IntegerField(default=0)
    image = models.URLField()
    bio = models.TextField()
    languages = models.CharField(max_length=255)
    specialties = models.CharField(max_length=255)

    def __str__(self):
        return self.name
