<template>
    <article>
        <h1>Connect a folder to existing repository</h1>
        <p>
            Often when I create a new repository through the GitHub website
            I initiate it with a Readme and License. When I don't clone this repo directly,
            but rather want to connect a folder to it, this commands come handy.
        </p>
        <pre class="code block">
            git init
            git remote add origin https://github.com/url.git
            git pull origin master --allow-unrelated-histories

            //fix merge conflicts if they exist and commit

            git push --set-upstream origin master
        </pre>
    </article>
</template>
