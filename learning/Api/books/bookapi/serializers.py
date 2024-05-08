from rest_framework import serializers
from bookapi.models import book

class bookSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only = True)
    title = serializers.CharField()
    number_of_pages = serializers.IntegerField()
    pulished_date = serializers.DateField()
    quantity = serializers.IntegerField()

    def create(self, data):
        return book.objects.create(**data)
