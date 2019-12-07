<template>
    <article>
        <h1>Email Validation</h1>
        <p>When I google a regex to validate an email adress I get this: <span class="code block">{{regex}}</span></p>
        <p>This is to long to be readable and understandable by normal humans, so in C# let's keep it simple with the MailAdress class</p>
        <Gist id="344c96c85a4046f22c3c3a711b95ec75" file="email-validation-csharp.cs"/>
        <p>That's all. Cred: <a href="https://dev.to/peledzohar/validate-mail-address-format-the-easy-way-5145" target="_blank" rel="noopener">Zohar on dev.to</a></p>
    </article>
</template>

<script>
import Gist from '@/components/Gist.vue'

export default {
    data(){
        return{
            regex: `/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`
        }
    },
    components: {
        Gist
    }
}
</script>