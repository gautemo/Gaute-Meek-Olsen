<template>
    <article>
        <h1>Shadow on Shapes</h1>
        <p>
            You can't use <pre class="code">box-shadow</pre> on elements with <pre class="code">clip-path</pre> or images(png or svg) that are transparent. 
            We have to use <pre class="code">filter</pre> and <pre class="code">drop-shadow</pre>. For images you can use the filter directly. 
            But for clip-path, it needs to be a child element (use ::before to not create wrapper elements).
        </p>
        <pre class="code block">
            filter: drop-shadow(1px 5px 5px red);
        </pre>
        <p>filter</p>
        <section id="filter">
            <figure>
                <div class="star"></div>
                <figcaption>clip-path</figcaption>
            </figure>
            <figure>
                <img class="img-star" src="https://66.media.tumblr.com/8168c42f90ee288fa32ea8609a846638/75047ef985944de3-18/s1280x1920/f907ff1da04a1ae22fa8939905bbc48db8512166.png" alt="a star">
                <figcaption>png/svg</figcaption>
            </figure>
        </section>
        <p>box-shadow</p>
        <section id="box">
            <figure>
                <div class="star"></div>
                <figcaption>clip-path</figcaption>
            </figure>
            <figure>
                <img class="img-star" src="https://66.media.tumblr.com/8168c42f90ee288fa32ea8609a846638/75047ef985944de3-18/s1280x1920/f907ff1da04a1ae22fa8939905bbc48db8512166.png" alt="a star">
                <figcaption>png/svg</figcaption>
            </figure>
        </section>
    </article>
</template>

<style scoped>
.star::before{
    content: "";
    display: block;
    height: 150px;
    width: 150px;
    background: black;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

.img-star{
    height: 150px;
    width: 150px;
}

#filter .star{
    filter: drop-shadow(1px 5px 5px red);
}

#filter .img-star{
    filter: drop-shadow(1px 5px 5px red);
}

#box .star{
    box-shadow: 1px 5px 5px red;
}

#box .img-star{
    box-shadow: 1px 5px 5px red;
}

section{
    display: grid;
    grid-auto-flow: column;
    gap: 25px;
    width: fit-content;
}

figure{
    margin: 0;
}
</style>