<template>
  <article>
    <h1>Fix PWA start url with Vue Router</h1>
    <p>
      If you have created a Vue project with the CLI with PWA and routing,
      you might have an issue that installed PWA starts with a blank page.
    </p>
    <p>
      To fix this, go to your manifest.json and change the "start_url" from "./index.html" to "/".
    </p>
  </article>
</template>
