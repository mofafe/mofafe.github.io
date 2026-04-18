---
title: "blog"
description: "mofafeの個人サイトのブログ、まだ特に何もないよ"
---

# なんにもない、<br>mofafeの&#8203;ブログ記事

{% assign sorted_posts = site.posts | sort: "title" | reverse %}

<ul>
  {% for post in sorted_posts %}
    <li>
      <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
      <a href="{{ post.url | relative_url }}">{{ post.title | default: post.url }}</a>
    </li>
  {% endfor %}
</ul>
