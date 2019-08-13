<template>
    <article>
        <h1>How to catch errors with async await</h1>
        <p>You could always wrap the await inside a try catch</p>
        <span class="code block">const getData = async url => {
            &nbsp;&nbsp;try{
            &nbsp;&nbsp;&nbsp;&nbsp;const response = await fetch(url)
            &nbsp;&nbsp;&nbsp;&nbsp;return await response.json()
            &nbsp;&nbsp;}catch(err){
            &nbsp;&nbsp;&nbsp;&nbsp;console.error(err)
            &nbsp;&nbsp;}
            &nbsp;&nbsp;return null
            }
        </span>
        <p>But I like this approach better.</p>
        <span class="code block">const getData = async url => {
            &nbsp;&nbsp;const response = await fetch(url).catch(err => console.error(err))
            &nbsp;&nbsp;if(response){
            &nbsp;&nbsp;&nbsp;&nbsp;return await response.json()
            &nbsp;&nbsp;}
            }
        </span>
        <p>And if you need to do more when you catch the error, you could always just pass your method <span class="code">.catch(handleError)</span></p>
    </article>
</template>
