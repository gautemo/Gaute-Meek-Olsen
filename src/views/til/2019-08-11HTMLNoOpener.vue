<template>
  <article>
    <h1>rel=noopener</h1>
    <p>
      You should add
      <span class="code">rel="noopener"</span> on all links with
      <span class="code">target="_blank"</span> for performance and security.
      This is because without it, it could allow the other page to run JavaScript on the same process as your page.
    </p>
    <p>
      <span class="code">rel="norefferer"</span> does the same, but also prevents the Referer header to be sent to the new page.
    </p>
    <p>
      For more information, see
      <a
        href="https://developers.google.com/web/tools/lighthouse/audits/noopener"
        target="_blank"
        rel="noopener"
      >developers.google.com</a>
    </p>
  </article>
</template>
