from rest_framework import generics, mixins, permissions
from rest_framework.response import Response

from .models import Place, Review
from .serializers import PlaceSerializer, ReviewSerializer


class PlacesView(mixins.ListModelMixin, generics.GenericAPIView):
    queryset = Place.objects.all()
    serializer_class = PlaceSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        places = Place.objects.all()
        serializer = PlaceSerializer(places, many=True, context={"request": request})
        return Response(serializer.data)


class ReviewsView(mixins.ListModelMixin, generics.GenericAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        try:
            data = request.data
            if "place_id" not in data:
                return Response(
                    {"error": "place_id parameter is required."}, status=400
                )
            place_id = data.get("place_id")
            place = Place.objects.get(id=place_id)
            reviews = Review.objects.filter(place=place)
            serializer = ReviewSerializer(reviews, many=True)
            return Response(serializer.data)
        except Place.DoesNotExist:
            return Response({"error": "Place not found."}, status=404)
        except Exception as e:
            return Response({"error": str(e)}, status=500)
