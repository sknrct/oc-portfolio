from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, use_url=True, required=False)  # 🔹 use_url=True

    class Meta:
        model = Project
        fields = "__all__"  # inclut image, title, description, technologies, etc.
