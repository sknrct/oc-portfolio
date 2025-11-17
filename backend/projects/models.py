from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    cahier_des_charges = models.TextField(blank=True)
    skills = models.TextField(blank=True)
    description = models.CharField(max_length=255)
    github = models.URLField(blank=True)
    website = models.URLField(blank=True)
    image = models.ImageField(upload_to='projects/')
    technologies = models.JSONField(default=list)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title