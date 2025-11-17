---
title: All Blog Posts - Archive
layout: layouts/blog.html
pagination:
    data: collections.blog
    size: 10
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer Posts'
paginationNextText: 'Older Posts'
paginationAnchor: '#post-list'
---
All of the articles from the blog.