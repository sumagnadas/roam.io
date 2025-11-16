from rest_framework import generics, mixins, permissions
from rest_framework.response import Response

from .models import Place
from .serializers import PlaceSerializer


class PlacesView(mixins.ListModelMixin, generics.GenericAPIView):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        places = Place.objects.all()
        serializer = PlaceSerializer(places, many=True)
        return Response(serializer.data)
