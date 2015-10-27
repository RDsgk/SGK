from django.contrib import admin
from .models import search_count

# Register your models here.
class SearchCountAdmin(admin.ModelAdmin):
	list_display = ('user','content','date')

admin.site.register(search_count,SearchCountAdmin)

