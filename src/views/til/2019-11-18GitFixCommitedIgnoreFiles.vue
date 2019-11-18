<template>
    <article>
        <h1>Ignore already commited files</h1>
        <p>If you have some files that should be ignored, but you discovered it after commiting or pushing the files, this will fix that.</p>
        <h4>Step 1</h4>
        <p>Make sure all your changes are commited!</p>
        <h4>Step 2</h4>
        <span class="cmd">git rm -r --cached .</span>
        <h4>Step 3</h4>
        <span class="cmd">git add .</span>
        <h4>Step 4</h4>
        <span class="cmd">git commit -m ".gitignore fix"</span>
    </article>
</template>
