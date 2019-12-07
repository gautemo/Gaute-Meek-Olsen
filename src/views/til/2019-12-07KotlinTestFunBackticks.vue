<template>
    <article>
        <h1>List &amp; Arrays to chunks</h1>
        <p>
            When you work with large lists or arrays, you might want to handle the elements in chunks to work with less elements.
            Let's do that with an extension method.
        </p>
        <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="chunks-csharp.cs"/>
    </article>
</template>

<script>
import Gist from '@/components/Gist.vue'

export default {
    components: {
        Gist
    }
}
</script>