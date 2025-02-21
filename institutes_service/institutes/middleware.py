from django.core.exceptions import DisallowedHost

class AllowDockerInternalHostMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        try:
            request.get_host()
        except DisallowedHost:
            request.META["HTTP_HOST"] = "institutes_service"
        return self.get_response(request)
