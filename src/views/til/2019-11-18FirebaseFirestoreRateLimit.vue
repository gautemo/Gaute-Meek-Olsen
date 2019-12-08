<template>
  <article>
    <h1>Firestore update rate limit</h1>
    <p>
      Today I learned how to not allow frequent updates to a Firestore document with rules.
    </p>
    <pre class="code block">
      match /users/{document=**} {
      &nbsp;&nbsp;allow create: if hasTimestamp();
      &nbsp;&nbsp;allow update: if hasTimestamp() &amp;&amp; isCalm();
      &nbsp;&nbsp;function hasTimestamp() {
      &nbsp;&nbsp;&nbsp;&nbsp;return request.resource.data.timestamp == request.time;
      &nbsp;&nbsp;}
      &nbsp;&nbsp;function isCalm() {
      &nbsp;&nbsp;&nbsp;&nbsp;return request.time > resource.data.timestamp + duration.value(5, 's');
      &nbsp;&nbsp;}
      }
    </pre>
    <p>
      Remember that <i>request</i> is the future state of the document (incoming), 
      while <i>resource</i> is the requested document (existing).
    </p>
    <p>
      This works when using <pre class="code">FieldValue.serverTimestamp()</pre> as timestamp. 
      That is now the only valid timestamp because of <i>hasTimestamp()</i> checks against request.time.
    </p>
    <p>
      <i>isCalm()</i> now checks that the existing timestamp is less than before 5 seconds ago.
    </p>
    <section>
      Thanks puf
      <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Implementing a write rate-limit in Firestore security rules.<br><br>The link contains examples with a global limit, and a per-user limit.<br><br>I still think this is one of the most fun things I&#39;ve done with Firestore security rules this year...<a href="https://t.co/AUIBD6RNt7">https://t.co/AUIBD6RNt7</a> <a href="https://t.co/gDDCByHmml">pic.twitter.com/gDDCByHmml</a></p>&mdash; Frank van Puffelen (@puf) <a href="https://twitter.com/puf/status/1196444467684884481?ref_src=twsrc%5Etfw">November 18, 2019</a></blockquote> <script type="application/javascript" async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </section>
  </article>
</template>
