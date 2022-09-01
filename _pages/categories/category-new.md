---
title: "What's new"
layout: archive
permalink: categories/new
author_profile: true
sidebar_main: true
---

{% assign posts = site.categories.New %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}
