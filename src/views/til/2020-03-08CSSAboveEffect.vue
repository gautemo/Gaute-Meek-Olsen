<template>
    <article>
        <header>
            <div class="intro">
                Remember to smile!
            </div>
            <div class="box">
                Thank you for reading and smiling!✨
            </div>
        </header>
        <h1>Above Previous Element's Background</h1>
        <p>
            How to make the element seem to be above previous elements background color. 
            You don't want to use negative margins, as they can lead to errors later on.
            Using <code>box-shadow</code> to extend the background color creates a nice effect.
        </p>
        <pre class="code block">
            box-shadow: 0 70px 0 #1CE;
        </pre>
        <p>See the result above the title.</p>
    </article>
</template>

<style scoped>
    header{
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
    }

    .intro{
        background: #1CE;
        height: 60px;
        padding: 50px;
        font-family: fantasy;
        text-align: center;
        font-size: 2em;
        box-shadow: 0 70px 0 #1CE;
    }

    .box{
        background: #4A7C85;
        height: 100px;
        width: 150px;
        padding: 20px;
        border-radius: 10px;
        color: white;
        font-size: 1.1em;
        position: absolute;
        right: 120px;
    }

    article{
        margin-top: 300px;
    }
</style>