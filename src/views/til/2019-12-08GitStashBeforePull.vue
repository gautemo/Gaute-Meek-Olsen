<template>
    <article>
        <h1>Stash local changes before pull</h1>
        <p>When you want to pull remote commits, but have changes in the same files locally you get an error.</p>
        <p>I often solved this by commiting my changes and then ran git pull</p>
        <p>But if you don't want to commit your changes yet, you can use git stash</p>
        <pre class="cmd">git stash</pre>
        <pre class="cmd">git pull</pre>
        <pre class="cmd">git stash pop</pre>
        <p>That's it. Maybe you need to solve any merge conflicts.</p>
    </article>
</template>
