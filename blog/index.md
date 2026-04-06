---
title: "mofafe - blog"
---

# 何にもない<br>mofafeの&#8203;ブログ記事一覧

{% assign sorted_posts = site.posts | sort: "title" | reverse %}

<ul>
  {% for post in sorted_posts %}
    <li>
      <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
      <a href="{{ post.url | relative_url }}">{{ post.title | default: post.url }}</a>
    </li>
  {% endfor %}
</ul>
