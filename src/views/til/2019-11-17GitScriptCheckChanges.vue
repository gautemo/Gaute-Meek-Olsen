<template>
    <article>
        <h1>Check for changes in local repository with script</h1>
        <p>I needed to check if the repository had any changes in a Azure DevOps pipeline.</p>
        <p>I solved it with a powershell script:</p>
        <pre class="code block">
            $AddedFiles = $(git ls-files --others --exclude-standard $folder | Measure-Object | Select-Object -expand Count)
            git diff-index --ignore-cr-at-eol --quiet HEAD -- $folder;$nochanges=$?
            Write-Host "Git found $AddedFiles untracked files"
            Write-Host "Git diff nochanges is: $nochanges"

            if($AddedFiles -gt 0 -Or !$nochanges){}
        </pre>
        <p>
            <pre class="code">git ls-files --others --exclude-standard</pre> is for checking untracked files, while
            <pre class="code">git diff-index --ignore-cr-at-eol --quiet HEAD</pre> is for checking tracked files.
        </p>
    </article>
</template>
