from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MenuItemView

router=DefaultRouter()
router.register(r'menuitem', MenuItemView)

urlpatterns=[
    path('api/', include(router.urls))
]