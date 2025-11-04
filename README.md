# Blog Template Built with 11ty

I am attempting to build a well-rounded template for blogs using 11ty. 

# Difference between {{ content | safe }} and {% block content %}

For example: if placing this in base.html

{{ content | safe }} will allow content to render from anything that references base.html - so if post.html has Front Matter that says "layout: 'base'" the everything in post will get rendered within the area on base. Or if index.md uses "layout: 'base'" then everything from index will get rendered. 

{% block content %} creates a placeholder for content - base.html could define content within
the block that would be rendered if the file that references (extends) base does not have anything inside the block content. If the file that extends base has a block content, then the block content in base gets replaced completely. So in this case, base has a block content, then post will first have to extend base, and then post will need to have it's own block content section for anything to get rendered and this will replace the placeholder in base. 

Two different ways to go about it, with block cotent being slightly more complex but allows for placeholder content. Either way will work. I suppose the decision to use one over the other is solely based on whether placeholder content is useful or not. 