from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.reverse import reverse


@api_view(["GET"])
@permission_classes((AllowAny,))
def api_root(request, format=None):
    return Response(
        {
            "places": reverse("places", request=request, format=format),
            "place": reverse("place_detail", request=request, format=format),
            "events": reverse("events", request=request, format=format),
            "guides": reverse("guides", request=request, format=format),
            "contact": reverse("contact", request=request, format=format),
        }
    )
