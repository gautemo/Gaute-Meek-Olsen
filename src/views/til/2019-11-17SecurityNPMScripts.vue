<template>
  <article>
    <h1>Disallow npm install to run other scripts</h1>
    <p>
      When installing packages from NPM, the packages could run preinstall and postinstall scripts.
      This could potentially be mallicius code or viruses allowed to run directly on your computer.
    </p>
    <p>
      This could be disallowed with <span class="cmd">npm install --ignore-scripts</span>
      or disallowed all the time with <span class="cmd">npm config set ignore-scripts true</span>
    </p>
    <p>
      This could lead to problems you need to fix if the package relies on those scripts.
      Kind of a hassle versus safty dilemma.
    </p>
    <p>
      More information on <a href="https://blog.npmjs.org/post/141702881055/package-install-scripts-vulnerability" target="_blank" rel="noopener">the npm blog</a>
    </p>
  </article>
</template>
