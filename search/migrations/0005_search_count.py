# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('search', '0004_auto_20150921_0729'),
    ]

    operations = [
        migrations.CreateModel(
            name='search_count',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('date', models.DateField(auto_now=True)),
                ('user', models.ForeignKey(related_name='search_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
