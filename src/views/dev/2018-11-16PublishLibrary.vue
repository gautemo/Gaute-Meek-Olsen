<template>
  <article>
    <h1>{{title}}</h1>
    <section>
      Let's say we have made our new JavaScript library to easily select elements from the DOM.
      A lot of people still use jQuery, but that should be abandoned a long time ago. Let's make something to ease them into living without it.
      <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'selectors.js'" />
    </section>
    <section>Now it's time to publish our library so it can be installed with NPM or imported by script from a CDN, so it can be used in other projects.</section>
    <section>
      First let's create our package.json file.
      <span class="cmd">npm init</span>
      The fields
      <b>name</b> and
      <b>version</b> are required. But I encourage you to fill out the other fields as well. This is our package.json file.
      <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'package.json'" />The
      <b>main</b> field contains the starting js file (often minified and in a dist folder) where we export our module. Use the
      <b>bin</b> field if it's a command-line file.
    </section>
    <section>
      Lets update our selector.js file and export our variables.
      <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'selector.js'" />
    </section>
    <section>
      If you don't have an NPM user you need to sign up
      <a href="https://www.npmjs.com/signup" target="_blank">here.</a>
    </section>
    <section>
      Then login in your terminal.
      <span class="cmd">npm login</span>
      Now we are ready to publish our module.
      <span class="cmd">npm publish</span>
    </section>
    <section>
      That's it, we have published our NPM module. See NPMs
      <a
        href="https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry"
        target="_blank"
        rel="noopener"
      >own guide</a> for a more detailed guide.
    </section>
    <section>Others can now use our module. Then we should have a readme with the installation and usage steps. (If you are coding along, create a new project)</section>
    <section>
      Installation:
      <span class="cmd">npm i selector-library --save</span>
      Usage:
      <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'import-selector.js'" />See
      <a href="https://wesbos.com/javascript-modules/" target="_blank" rel="noopener">WesBos guide</a> for how to export and import your modules to fit your need.
    </section>
    <section>
      We also want to access the module from a script tag, we'll use the simple solution
      <a href="https://unpkg.com" target="_blank" rel="noopener">UNPKG</a>
      which gets the file from npmjs for us.
      This is what we put in the src attribute.
      <span
        class="example"
      >unpkg.com/:package@:version/:file</span>
      We can skip file and version if we don't have to be specific about what the browser should download. Pick the option you like.
      <span
        class="example"
      >&lt;script src=&quot;https://unpkg.com/selector-library@1.0.6/selector.js&quot;&gt;&lt;/script&gt;</span>
      <span
        class="example"
      >&lt;script src=&quot;https://unpkg.com/selector-library&quot;&gt;&lt;/script&gt;</span>
    </section>
    <section>
      Just one short thing, including a script tag, does not allow the export statement.
      Let's change our selector script if we want to allow installation through NPM and CDN.
      <Gist :id="'344c96c85a4046f22c3c3a711b95ec75'" :file="'selector-npm-cdn.js'" />
    </section>
    <section>
      That's it! Example
      <a href="https://www.npmjs.com/package/selector-library" target="_blank" rel="noopener">NPM</a> and
      <a href="https://github.com/gautemo/selector-library" target="_blank" rel="noopener">GitHub</a>.
      Of course, this is just a demo library, but this is how creating an NPM module is done that's also available to a script tag for people not using a build tool.
    </section>
    <Share :url="'https://gaute.app' + $route.path" :text="title" />
  </article>
</template>

<script>
import Gist from "@/components/Gist.vue";
import Share from "@/components/Share.vue";

export default {
  name: "ServiceWorkerVue",
  data() {
    return {
      title: "How to publish a js library to NPM and CDN"
    };
  },
  components: {
    Gist,
    Share
  }
};
</script>
