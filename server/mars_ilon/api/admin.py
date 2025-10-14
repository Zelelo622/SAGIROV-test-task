from django.contrib import admin
from .models import MenuItem

# Register your models here.
@admin.register(MenuItem)
class MenuItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'url')
    search_fields = ('title', 'url')
    list_editable = ('title', 'url')