---
title: How to create a triangle in CSS
author: Edwin Torres
date: 2020-05-20
hero: ./images/hero.png
excerpt: Do you know how to create a triangle in CSS without using images?, Well here is a short explanation
---

A couple of days before, I had to face this common challenge, however, there are many solutions (using images, using divs, and using pseudo-elements with and empty content). For me, the best solution was using pseudo-elements, so that here is my solution.

If you want to read more about this common pattern, please review [this article in CSS Tricks](https://css-tricks.com/snippets/css/css-triangle/) (One of the best pages for CSS Content).

## Understanding ::before and ::after pseudo-elements in CSS

In few words a [pseudo-element](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) is : 

> A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s). For example, ::first-line can be used to change the font of the first line of a paragraph. 


## Creating the triangle

After understanding the above concept, it means we can add some content, or create another element given a selector. 
In our case, if we define a `border-width` and we have an empty `content`, the border will start from the center of the element.

<iframe src="https://giphy.com/embed/DfSXiR60W9MVq" width="100%" height="100%" style="width: 100%; max-width: 850px; margin: 20px auto;" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

Then, pretty much we need to play with the `border-color`, `border-width` and the `position:absolute` to create our triangle. Below, you will find a couple of examples in my [codepen](https://codepen.io/codesandtags/embed/ExVGWvG?height=265&theme-id=dark&default-tab=result). 

<iframe height="450" style="width: 100%; max-width: 850px; margin: 20px auto;" scrolling="no" title="Triangles CSS" src="https://codepen.io/codesandtags/embed/ExVGWvG?height=265&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/codesandtags/pen/ExVGWvG'>Triangles CSS</a> by Edwin Torres
  (<a href='https://codepen.io/codesandtags'>@codesandtags</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## What's the next?

Well, I think that's all using a short example. Given the above examples, you can add letters, transformations, animations, and whatever you can imagine, using the pseudo-elements.
To get a complete list, please [check the documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements) and don't forget review the [compatibility with browsers](https://caniuse.com/#search=%3A%3Abefore).


Cheers and keep learning! 🍻