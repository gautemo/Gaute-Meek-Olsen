<template>
    <article>
        <h1>Set to array</h1>
        <p>If you have a Set and want to transform it to an array you can do it with the spread syntax</p>
        <pre class="code block">
            const uniqueNumbers = new Set([1, 1, 4, 5, 4]);
            const arr = [...uniqueNumbers];
        </pre>
        <p>So a fancy way of getting unique values is casting an array back and forth:</p>
        <pre class="code block">
            let arr = [1, 1, 4, 5, 4];
            arr = [...new Set(arr)];
        </pre>
    </article>
</template>
