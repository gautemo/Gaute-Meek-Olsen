---
title: Developer blog with dev.to as your backend/CMS
date: 2020-03-08
description: How to create your own developer blog using dev.to as your CMS.
---

## TLDR

Fork this repo [github.com/gautemo/blog-devto-backend](https://github.com/gautemo/blog-devto-backend) and change the username to yours on dev.to in script/app.js. Now you got your very own developer blog! 🥳

## The idea

So you want your own developer blog. The reasons are many;

- Share your knowledge, help other
- Document what you learn for your future self to look back on
- You will learn the subject better
- Boost your career and market yourself

## Where do you start?

There are so many options and they all require different time, skills to learn, or money put into it.

You could write every article in HTML. This is the way I started. This works fine and you can write extra code to add functionality if an article requires it. Like [this one](https://gaute.dev/dev-blog/css-variables) where you can switch to dark mode. But I can tell you, it is cumbersome to edit and manage your blog articles after a while.

[Wordpress](https://wordpress.com/) or other content management systems is another simple solution. But can you customize the site to how you like it and show code snippets? Is the free plan enough for you or would you need to pay money?

Do you create a headless content management system with products such as [Gridsome](https://gridsome.org/), [Gatsby](https://www.gatsbyjs.org/), [Sanity](https://www.sanity.io/) and/or [Strapi](https://strapi.io/)? This might be a very good option, but it sounds like a lot of work and investigation on which products to choose.

Create everything from scratch with your own database? That's probably the most work to reach your goal.

Use [dev.to](https://dev.to/) to create articles and use their [API](https://docs.dev.to/api/) to show the articles on your own blog. This is a simple, yet very good option which this article will be about. dev.to is created to write developer articles, so it's easy to edit, add images and code blocks. Code blocks are important, so the code is highlighted and readers can copy the code.

## Let's get started

First, we are going to create a home page, which lists out every blog we have written.

We will use the endpoint:

```bash
curl https://dev.to/api/articles?username=gautemeekolsen
```

In our [index.html](https://github.com/gautemo/blog-devto-backend/blob/master/index.html) file, we have a `ul` element which we will populate with our blog items using the template.

```html
<ul id="blog-list"></ul>

<template id="blog-item">
  <li>
    <a class="url">
      <img class="cover" alt="cover image" />
      <h3 class="title"></h3>
    </a>
  </li>
</template>
```

Then the [app.js](https://github.com/gautemo/blog-devto-backend/blob/master/script/app.js) will fetch the API and loop over the articles to add them to the list in the DOM. (You could simplify the code with some framework, such as [Vue.js](https://vuejs.org/), but I don't feel it's necessary when so little code is needed.)

```js
const username = 'gautemeekolsen' //change this to your own

const getArticles = async () => {
  const response = await fetch(`https://dev.to/api/articles?username=${username}`)
  const data = await response.json()
  for (article of data) {
    addArticle(article)
  }
}

const addArticle = (article) => {
  const template = document.querySelector('#blog-item')
  const clone = template.content.cloneNode(true)
  clone.querySelector('.title').textContent = article.title
  clone.querySelector('.url').href = `article.html?id=${article.id}`
  clone.querySelector('.cover').src = article.cover_image
  document.querySelector('#blog-list').appendChild(clone)
}
```

With some styling our landing page is now done! Complete code is at [index.html](https://github.com/gautemo/blog-devto-backend/blob/master/index.html), [app.js](https://github.com/gautemo/blog-devto-backend/blob/master/script/app.js), [style.css](https://github.com/gautemo/blog-devto-backend/blob/master/style/style.css), and [home.css](https://github.com/gautemo/blog-devto-backend/blob/master/style/home.css).

![Home page](/images/dev-blog/developer-blog-with-devto/home.png)

On to the article page. To get a specific article we will use the endpoint:

```bash
curl https://dev.to/api/articles/259798
```

The [article.html](https://github.com/gautemo/blog-devto-backend/blob/master/article.html) file will have the elements for the cover image, title, and article body.

```html
<article>
  <img id="cover" alt="cover image" />
  <h1 id="title"></h1>
  <div id="article-body"></div>
</article>
```

Which are populated from the [article.js](https://github.com/gautemo/blog-devto-backend/blob/master/script/article.js)

```js
const searchParams = new URLSearchParams(location.search)
const id = searchParams.get('id')

const response = await fetch(`https://dev.to/api/articles/${id}`)
const data = await response.json()

document.querySelector('#title').textContent = data.title
document.querySelector('#cover').src = data.cover_image
document.querySelector('#article-body').innerHTML = data.body_html
```

But now we are missing the code highlighting from dev.to.
You can add code highlighting in dev.to articles by adding the file extension after three backticks like this

<pre>
&#96;&#96;&#96;js
console.log('hi friend');
&#96;&#96;&#96;
</pre>

To get the same highlighting on our site, we will take the CSS dev.to is using from their github [github.com/thepracticaldev/dev.to](https://github.com/thepracticaldev/dev.to/blob/master/app/assets/stylesheets/syntax.scss). You could use an online [Sass compiler](https://www.sassmeister.com/) to get the CSS since we have not set up our project with Sass.

With some more styling, our article page is now done. Complete code is here [article.html](https://github.com/gautemo/blog-devto-backend/blob/master/article.html), [article.js](https://github.com/gautemo/blog-devto-backend/blob/master/script/article.js), [style.css](https://github.com/gautemo/blog-devto-backend/blob/master/style/style.css), [article.css](https://github.com/gautemo/blog-devto-backend/blob/master/style/article.css), and [devto.css](https://github.com/gautemo/blog-devto-backend/blob/master/style/devto.css).

![Article](/images/dev-blog/developer-blog-with-devto/article.png)

## Conclusion

That's how quickly you can have your own developer blog up and running, which is easy to manage. Of course, your articles will be posted on dev.to and you rely on their API, which could be an uncertainty.

All you need to do is fork my [GitHub repository](https://github.com/gautemo/blog-devto-backend/), change it to your username in app.js, write articles on [dev.to](https://dev.to/) and host your blog on i.e. [GitHub Pages](https://pages.github.com/), [Netlify](https://dev.to/gautemeekolsen/hosting-your-website-with-netlify-2ojk) or [Firebase](https://dev.to/gautemeekolsen/hosting-your-website-with-firebase-21ni). Also, maybe change the styling if you want your own theme.

I don't know if you are reading this on dev.to or on my blog. But to demonstrate you can see the same article in these two places;
[dev.to/gautemeekolsen/developer-blog-with-dev-to-as-your-backend-cms-542n](https://dev.to/gautemeekolsen/developer-blog-with-dev-to-as-your-backend-cms-542n) and
[gautemo.github.io/blog-devto-backend/article.html?id=276324](https://gautemo.github.io/blog-devto-backend/article.html?id=276324).
