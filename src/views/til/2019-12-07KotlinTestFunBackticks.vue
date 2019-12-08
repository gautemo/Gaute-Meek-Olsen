<template>
    <article>
        <h1>Improve readability for test fun with backticks</h1>
        <p>
            Kotlin allows you to name functions with backticks, allowing you to put spaces in the name to write a sentence.
            This isn't very nice for ordinary functions. But for your unit tests, this is perfect, since you never call this functions yourself.
            This improves readability a lot. No need for CamelCase or Snake_case.
        </p>
        <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="test-kotlin.kt"/>
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