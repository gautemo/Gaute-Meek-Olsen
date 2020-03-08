<template>
    <article>
        <h1>Create a Branch from a Commit</h1>
        <p>
            Let's say you have commited some changes, 
            but you want to continue from a previously commit without deleting 
            your commits from the branch because you might want to go back.
        </p>
        <ol>
            <li>
                List recent commits to find the one you want to branch from. You can change the number 3 to how many commits you want to go back.
            </li>
            <li>
                <pre class="code block">
                    git log -3
                </pre>
            </li>
            <li>Copy the commit hash (looks something like this: 5eb92c63c960036a9cb52aaa98b916ce9ca86979)</li>
            <li>Add your branch name and commit hash to the next step</li>
            <li>
                <pre class="code block">
                    git checkout -b my-branch-name 5eb92c63c960036a9cb52aaa98b916ce9ca86979
                </pre>
            </li>
        </ol>
    </article>
</template>