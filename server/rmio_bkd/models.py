import uuid

from django.db import models


class Place(models.Model):
    name = models.CharField()
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    def __str__(self):
        return self.name
