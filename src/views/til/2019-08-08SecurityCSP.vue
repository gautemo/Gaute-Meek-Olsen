<template>
  <article>
    <h1>Content Security Policy (CSP)</h1>
    <p>This is used to prevent your website from downloading files from untrusted domains.</p>
    <p>
      I heard about it from Troy Hunt
      <a
        href="https://youtu.be/kIo7DNAd_oo?t=1096"
        target="_blank"
        rel="noopener"
      >here.</a>
    </p>
    <p>
      You wan't to add something like this to your head tag in the html file.
      <span
        class="code block"
      >
        &lt;meta http-equiv="Content-Security-Policy"
        content="default-src 'self' https://www.googletagmanager.com; img-src 'self' https://*; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;"&gt;
      </span>
    </p>
    <p>If some attackers have managed to get, let's say a script tag into your browser, this would stop that script from running.</p>
    <p>
      For more information see
      <a
        href="https://content-security-policy.com/"
        target="_blank"
        rel="noopener"
      >this page.</a>
    </p>
    <h6>You will encounter problems if you have a Vue project. Maybe for other frameworks as well.</h6>
  </article>
</template>

<style scoped>
h6 {
  font-weight: 100;
}
</style>
