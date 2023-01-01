---
title: Maximum Parallel Tasks
date: 2019-12-30
category: C#
description: Controlling maximum number of parallel tasks in C#.
---

```csharp
var numbers = new int[]{1,2,3,4,5,6};
Parallel.ForEach(numbers, new ParallelOptions{ MaxDegreeOfParallelism = 2 }, nr => PrintNumber(nr));
```
