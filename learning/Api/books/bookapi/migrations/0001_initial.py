# Generated by Django 5.0.4 on 2024-05-03 18:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='book',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('number_of_pages', models.IntegerField()),
                ('pulished_date', models.DateField()),
                ('quantity', models.IntegerField()),
            ],
        ),
    ]
