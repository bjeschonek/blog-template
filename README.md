# Blog Template Built with 11ty

I am attempting to build a well-rounded template for blogs using 11ty. 

# Difference between {{ content | safe }} and {% block content %}

For example: if placing this is base.html

{{ content | safe }} will allow content to render from anything that references base.html

{% block content %} creates a placeholder for content - base.html could define content within
the block that would be rendered if the file that references (extends) base does not have anything inside the block content. If the file that extends base has a block content, then the block content in base gets replaced completely. Two different ways to go about it, with block cotent being slightly more complex but allows for placeholder content. 