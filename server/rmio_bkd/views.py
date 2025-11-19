from rest_framework import generics, mixins, permissions
from rest_framework.response import Response

from .models import Event, LocalGuide, Place
from .serializers import (
    EventSerializer,
    LocalGuideSerializer,
    PlaceSerializer,
    PlacesSerializer,
)


class PlacesView(mixins.ListModelMixin, generics.GenericAPIView):
    queryset = Place.objects.all()
    serializer_class = PlacesSerializer
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        try:
            data = request.data
            if "style" not in data:
                places = Place.objects.all()
            else:
                style = data.get("style")
                places = Place.objects.filter(styles__icontains=style)
            serializer = PlacesSerializer(
                places, many=True, context={"request": request}
            )
            return Response(serializer.data)
        except Exception as e:
            return Response({"error": str(e)}, status=500)


class PlaceView(mixins.RetrieveModelMixin, generics.GenericAPIView):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = "id"

    def post(self, request):
        try:
            data = request.data
            if "place_id" not in data:
                return Response(
                    {"error": "place_id parameter is required."}, status=400
                )
            place_id = data.get("place_id")
            place = Place.objects.get(id=place_id)
            serializer = PlaceSerializer(place, context={"request": request})
            return Response(serializer.data)
        except Place.DoesNotExist:
            return Response({"error": "Place not found."}, status=404)
        except Exception as e:
            return Response({"error": str(e)}, status=500)


class EventsView(mixins.ListModelMixin, generics.GenericAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        try:
            serializer = EventSerializer(Event.objects.all(), many=True)
            return Response(serializer.data)
        except Exception as e:
            return Response({"error": str(e)}, status=500)


class LocalGuidesView(mixins.ListModelMixin, generics.GenericAPIView):
    queryset = LocalGuide.objects.all()
    serializer_class = LocalGuideSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        try:
            serializer = LocalGuideSerializer(
                self.get_queryset(), many=True, context={"request": request}
            )
            return Response(serializer.data)
        except Exception as e:
            return Response({"error": str(e)}, status=500)
