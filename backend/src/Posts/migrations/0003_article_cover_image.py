# Generated by Django 2.2.4 on 2019-09-24 10:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Posts', '0002_event_cover_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='cover_image',
            field=models.ImageField(default='default.jpg', upload_to='images/'),
        ),
    ]