<template>
  <article>
    <h1>Active router link CSS class</h1>
    <p>
      The Vue Router automaticly applies classes to active router links.
      No need to compare the url yourself.
    </p>
    <p>
      <span class="code block">&lt;router-link to="/link"&gt;Link&lt;/router-link&gt;
      </span>
      can now be targeted with
      <span class="code block">.router-link-exact-active{
        &nbsp;&nbsp;background: red;
        }

        .router-link-active{
        &nbsp;&nbsp;background: blue;
        }
      </span>
      The difference between <i>router-link-exact-active</i> and <i>router-link-active</i>
      is that the exact only applies if the entire url matches,
      while the router-link-active is applied if it is part of the url, the user is on a sub-path or exact path.
    </p>
  </article>
</template>
