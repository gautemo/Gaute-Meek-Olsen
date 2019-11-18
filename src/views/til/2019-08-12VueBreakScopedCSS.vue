<template>
  <article>
    <h1>Break Out of Scoped CSS</h1>
    <p class="follow-me">
    Today I found out it is possible to break out of a scoped CSS.
    Let's say you have two components, &lt;myfooter&gt; and &lt;myaside&gt;.
    Both of them contain your follow twitter component. But you wan't different styling for them.
    </p>
    <h4>Issue with scoped styling</h4>
    <p>You can't select child component elements. (Except for the components first element, which contains the data id from both parent and child)</p>
    <pre class="code block">
      .follow-me .twitter{
      &nbsp;&nbsp; height: 100px;
      }
    </pre>
    <p>
        Gives you this selector <pre class="code">.follow-me .twitter[data-v-6ed8c10e]</pre>
        The data-v-6ed8c10e id is specific for &lt;myfooter&gt; component elements, and therefore can't add style to the child component.
        And I need the scoped CSS to not change the &lt;myaside&gt; component's twitter.
    </p>
    <h4>Solution</h4>
    <p>
        Use deep selector with the combinator <pre class="code">>>></pre>, like this.
        <pre class="code block">
          .follow-me >>> .twitter{
          &nbsp;&nbsp; height: 100px;
          }
        </pre>
        Which give the selector we want. <pre class="code">.follow-me[data-v-6ed8c10e] .twitter</pre>
    </p>
    <p>This is also usefull when binding html with <pre class="code">v-html</pre></p>
    <h6>You could also use <pre class="code">/deep/</pre> insted of <pre class="code">>>></pre></h6>
    <footer>
        <Twitter />
        <LinkedIn />
        <Github />
        <Instagram />
        <GooglePlay />
    </footer>
    <blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/TIL?src=hash&amp;ref_src=twsrc%5Etfw">#TIL</a> Today I Learned you can break out of scoped CSS in Vue <a href="https://twitter.com/vuejs?ref_src=twsrc%5Etfw">@vuejs</a>. <a href="https://t.co/2vOonhpGJl">https://t.co/2vOonhpGJl</a> <a href="https://twitter.com/hashtag/VueJS?src=hash&amp;ref_src=twsrc%5Etfw">#VueJS</a> <a href="https://twitter.com/hashtag/Vue?src=hash&amp;ref_src=twsrc%5Etfw">#Vue</a> <a href="https://t.co/4do9UDIRyT">pic.twitter.com/4do9UDIRyT</a></p>&mdash; Gaute Meek Olsen (@GauteMeekOlsen) <a href="https://twitter.com/GauteMeekOlsen/status/1161044977381777409?ref_src=twsrc%5Etfw">August 12, 2019</a></blockquote> <script async  type="application/javascript" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
  </article>
</template>

<script>
export default {
  components: {
    Twitter: () => import(`@/components/follow/Twitter`),
    Instagram: () => import(`@/components/follow/Instagram`),
    Github: () => import(`@/components/follow/Github`),
    GooglePlay: () => import(`@/components/follow/GooglePlay`),
    LinkedIn: () => import(`@/components/follow/LinkedIn`)
  }
}
</script>

<style scoped>
h6 {
  font-weight: 100;
}
footer >>> svg{
    height: 100px;
    width: 100px;
}

p{
    line-height: 35px;
}

article >>> .twitter,
article >>> .insta,
article >>> .github,
article >>> .play,
article >>> .linkedin{
    border-bottom: none;
}

article >>> .twitter:hover,
article >>> .insta:hover,
article >>> .github:hover,
article >>> .play:hover,
article >>> .linkedin:hover{
    background: none;
}

footer{
    display: grid;
    grid-auto-flow: column;
}
</style>
