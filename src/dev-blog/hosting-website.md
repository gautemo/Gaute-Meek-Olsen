---
title: Hosting your website
date: 2019-06-14
hideCoverImg: true
tags: [Firebase, Netlify]
---

Hosting your website has become really simple. I prefer doing it through Firebase or Netlify, which both serves it through https under their subdomains or your own domain if you own that.

## Firebase

First sign in and create a project in the [Firebase console](https://console.firebase.google.com/). Then go to your terminal and perform this commands and your site will be up and running.

Command 1 and 2 are only for your first time, if you haven't installed the firebase-tools and signed in.

```sh
npm install -g firebase-tools
firebase login
firebase init
```

Select "Hosting" with space then enter. Then select the project created in the Firebase console. Then enter the path to the folder your index.html file is located (i.e. public). If you have a single-page app and want all urls to point to index.html select yes.

```sh
firebase deploy
```

Congratulations, you have now hosted your website. You will find your page as a subdomain of firebaseapp.com and web.app. Like this https://projectid.firebaseapp.com and https://projectid.web.app. If you need your own domain, just go to Hosting in the firebase console and press the Connect domain button. Each time you need to update the content, just make the changes and hit `firebase deploy` again.

If you need to test the website on localhost first that is done with

```sh
firebase serve
```

## Netlify

But if you don't want manually deployment. I suggest using [Netlify](https://app.netlify.com/). Just sign in and click the "New site from Git" button. Select your git provider and give access to the wanted repository. If you have deployment commands you can easy add them in the build command input. Such as `npm run build`. Commands can be chained with &&. Finish with "Deploy site".

Your site are now deployed. Now you can change your subdomain in "Site settings" and "Change site name". Now each time you push to your repository, your website will update automatic.

If you would like to test your page first, you can use their CLI (Command Line Interface).

```sh
npm install netlify-cli -g
```

Testing on localhost, open a terminal at the location of your index.html

```sh
netlify dev
```

You can also share your what you do locally with anyone around the world.

```sh
netlify init
```

And connect to your git repository.

```sh
netlify dev --live
```

Now you get a url you can distribute. Every time you save a file, they can refresh their browser to see the changes.
If you need manually deploy with netlify, you can use

```sh
netlify deploy --prod
```

## Conclusion

There you got two simple ways to host your website over https, p.s. you shouldn't use http anymore because it's not secure. Both are good option, Firebase has the simplest domain with web.app, but if you want deployment automation with Firebase you need to combine it with a continious integration tool such as Gitlab CI or Travis CI.