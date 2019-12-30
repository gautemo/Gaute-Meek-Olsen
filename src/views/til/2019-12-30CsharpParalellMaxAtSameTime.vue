<template>
    <article>
        <h1>Maximum Paralell Tasks</h1>
        <pre class="code block">
            var numbers = new int[]{1,2,3,4,5,6};
            Parallel.ForEach(numbers, new ParallelOptions{ MaxDegreeOfParallelism = 2 }, nr => PrintNumber(nr));
        </pre>
    </article>
</template>
