
from rest_framework import permissions
from django.contrib.auth.models import User, Group

class ServicePermission(permissions.BasePermission):
    """
    Global permission check for blacklisted IPs.
    """

    def has_permission(self, request, view):
        ip_addr = request.META['REMOTE_ADDR']
        user = request.user
        auth = request.auth
        groups = request.user.groups.all()
        if not groups is None:
            for group in groups:
                if group.name == "Customer":
                    return True

        return False


class IsOwnerOrAdmin(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to see and edit it.
    Admin users however have access to all.
    """
    def has_object_permission(self, request, view, obj):
        # Permissions are only allowed to the owner of the snippet
        if request.user.is_staff:
            return True
        return obj.owner == request.user