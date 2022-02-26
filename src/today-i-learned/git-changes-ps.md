---
title: Check for changes in local repository with script
date: 2019-11-17
category: git
---

I needed to check if the repository had any changes in an Azure DevOps pipeline.

I solved it with a powershell script:

```powershell
$AddedFiles = $(git ls-files --others --exclude-standard $folder | Measure-Object | Select-Object -expand Count)
git diff-index --ignore-cr-at-eol --quiet HEAD -- $folder;$nochanges=$?
Write-Host "Git found $AddedFiles untracked files"
Write-Host "Git diff nochanges is: $nochanges"

if($AddedFiles -gt 0 -Or !$nochanges){}
```

`git ls-files --others --exclude-standard` is for checking untracked files, while `git diff-index --ignore-cr-at-eol --quiet HEAD` is for checking tracked files.
