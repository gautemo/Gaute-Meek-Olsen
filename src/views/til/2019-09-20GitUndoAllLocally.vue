<template>
    <article>
        <h1>Clear all local changes</h1>
        <p>Today I re-learned how to remove all changes done in your locally repository</p>
        <p>Restore modified or deleted paths to their original contents:</p>
        <pre class="code block">
            git checkout .
            git clean -fd
        </pre>
        <p>checkout . restores all tracked files, while clean removes untracked files where f is for files and d for directories</p>
        <p>If you have added files you can reset them to unstaged with:</p>
        <pre class="code block">
            git reset
        </pre>
        <p>Undo all commits with:</p>
        <pre class="code block">
            git reset --hard origin/master
        </pre>
        <p>This was mostly to have a recipe I can go back to later.</p>
    </article>
</template>
