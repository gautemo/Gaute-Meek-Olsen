<template>
  <article>
    <h1>{{title}}</h1>
    <section>
      Hosting your website has become really simple. I prefer doing it through Firebase or Netlify,
      which both serves it through https under their subdomains or your own domain if you own that.
    </section>
    <h2>Firebase</h2>
    <section>
      First sign in and create a project in the
      <a
        href="https://console.firebase.google.com/"
        target="_blank"
        rel="noopener"
      >Firebase console</a>.
      Then go to your terminal and perform this commands and your site will be up and running.
    </section>
    <section>
      Command 1 and 2 are only for your first time, if you haven't installed the firebase-tools and signed in.
      <span
        class="cmd"
      >npm install -g firebase-tools</span>
      <span class="cmd">firebase login</span>
      <span class="cmd">firebase init</span>
      Select "Hosting" with space then enter.
      Then select the project created in the Firebase console.
      Then enter the path to the folder your index.html file is located (i.e. public). If you have a single-page app and want all urls to point to index.html select yes.
      <span
        class="cmd"
      >firebase deploy</span>
    </section>
    <section>
      Congratulations, you have now hosted your website.
      You will find your page as a subdomain of firebaseapp.com and web.app. Like this https://projectid.firebaseapp.com and https://projectid.web.app.
      If you need your own domain, just go to Hosting in the firebase console and press the Connect domain button.
      Each time you need to update the content, just make the changes and hit
      <pre class="code">firebase deploy</pre> again.
    </section>
    <section>
      If you need to test the website on localhost first that is done with
      <span
        class="cmd"
      >firebase serve</span>
    </section>
    <h2>Netlify</h2>
    <section>
      But if you don't want manually deployment. I suggest using
      <a
        href="https://app.netlify.com/"
        target="_blank"
        rel="noopener"
      >Netlify</a>.
      Just sign in and click the "New site from Git" button. Select your git provider and give access to the wanted repository.
      If you have deployment commands you can easy add them in the build command input. Such as
      <pre class="code">npm run build</pre>.
      Commands can be chained with &amp;&amp;.
      Finish with "Deploy site".
    </section>
    <section>
      Your site are now deployed. Now you can change your subdomain in "Site settings" and "Change site name".
      Now each time you push to your repository, your website will update automatic.
    </section>
    <section>
      If you would like to test your page first, you can use their CLI (Command Line Interface).
      <span
        class="cmd"
      >npm install netlify-cli -g</span>
      Testing on localhost, open a terminal at the location of your index.html
      <span
        class="cmd"
      >netlify dev</span>
    </section>
    <section>
      You can also share your what you do locally with anyone around the world.
      <span
        class="cmd"
      >netlify init</span>
      And connect to your git repository.
      <span class="cmd">netlify dev --live</span>
      Now you get a url you can distribute. Every time you save a file, they can refresh their browser to see the changes.
    </section>
    <section>
      If you need manually deploy with netlify, you can use
      <span class="cmd">netlify deploy --prod</span>
    </section>
    <h2>Conclusion</h2>
    <section>
      There you got two simple ways to host your website over https, p.s. you shouldn't use http anymore because it's not secure.
      Both are good option, Firebase has the simplest domain with web.app,
      but if you want deployment automation with Firebase you need to combine it with a continious integration tool
      such as Gitlab CI or Travis CI.
    </section>
  </article>
</template>

<script>
export default {
  name: 'Hosting',
  data () {
    return {
      title: 'Hosting your website'
    }
  }
}
</script>
