<template>
    <article>
        <h1>{{title}}</h1>
        <img :src="coverImg" alt="cover image" v-if="coverImg">
        <div v-html="bodyHtml" class="content"></div>
    </article>
</template>

<script>
export default {
    data: () => ({
        title: '',
        coverImg: '',
        bodyHtml: '',
    }),
    async created(){
        const response = await fetch(`https://dev.to/api/articles/${this.articleId}`)
        const data = await response.json();
        this.title = data.title;
        this.coverImg = data.cover_image;
        this.bodyHtml = data.body_html;
    },
    props: { articleId: String }
}
</script>

<style scoped>
.content{
    padding-bottom: 50px;
}

.content >>> :not(.highlight) code{
    background: rgb(194, 194, 194);
    border-radius: 2px;
    padding: 2px;
}

.content >>> div.highlight{
    padding: 3%;
    overflow: auto;
}

.content >>> img{
    margin: 15px auto;
    display: block;
    width: auto;
    max-width: 100%;
}

.content >>> table {
  border-collapse: collapse;
  margin: 15px auto;
}
.content >>> table,
.content >>> th,
.content >>> td {
  border: 1px solid #c9c9c9;
}
.content >>> th{
    background: #f9f9fa;
}
.content >>> td{
    text-align: center;
    min-width: 80px;
}
.content >>> td li{
    text-align: start;
}

/* Taken from https://github.com/thepracticaldev/dev.to/blob/master/app/assets/stylesheets/syntax.scss */

.content >>> div .highlight pre .highlight code {
  font-size: inherit;
  padding: 0px;
}

.content >>> div.inner-comment div.body div .highlight pre .highlight {
  background: #29292e;
}

.content >>> div.inner-comment div.body div.highlight pre .highlight code {
    font-size: inherit;
    white-space: inherit;
    background: inherit;
    color: inherit;
}

.content >>> .highlight .hll {
  background-color: #49483e;
}
.content >>> .highlight {
  background: #29292e;
  color: #f8f8f2;
}
.content >>> .highlight .c {
  color: #75715e;
} /* Comment */
.content >>> .highlight .err {
  text-shadow: 0 0 3px #ff3030, 0 0 5px #ff3030, 0 0 10px #ff3030;
} /* Error */
.content >>> .highlight .k {
  color: #66d9ef;
} /* Keyword */
.content >>> .highlight .l {
  color: #ae81ff;
} /* Literal */
.content >>> .highlight .n {
  color: #f8f8f2;
} /* Name */
.content >>> .highlight .o {
  color: #f92672;
} /* Operator */
.content >>> .highlight .p {
  color: #f8f8f2;
} /* Punctuation */
.content >>> .highlight .ch {
  color: #75715e;
} /* Comment.Hashbang */
.content >>> .highlight .cm {
  color: #75715e;
} /* Comment.Multiline */
.content >>> .highlight .cp {
  color: #75715e;
} /* Comment.Preproc */
.content >>> .highlight .cpf {
  color: #75715e;
} /* Comment.PreprocFile */
.content >>> .highlight .c1 {
  color: #75715e;
} /* Comment.Single */
.content >>> .highlight .cs {
  color: #75715e;
} /* Comment.Special */
.content >>> .highlight .gd {
  color: #f92672;
} /* Generic.Deleted */
.content >>> .highlight .ge {
  font-style: italic;
} /* Generic.Emph */
.content >>> .highlight .gi {
  color: #a6e22e;
} /* Generic.Inserted */
.content >>> .highlight .gs {
  font-weight: bold;
} /* Generic.Strong */
.content >>> .highlight .gu {
  color: #75715e;
} /* Generic.Subheading */
.content >>> .highlight .kc {
  color: #66d9ef;
} /* Keyword.Constant */
.content >>> .highlight .kd {
  color: #66d9ef;
} /* Keyword.Declaration */
.content >>> .highlight .kn {
  color: #f92672;
} /* Keyword.Namespace */
.content >>> .highlight .kp {
  color: #66d9ef;
} /* Keyword.Pseudo */
.content >>> .highlight .kr {
  color: #66d9ef;
} /* Keyword.Reserved */
.content >>> .highlight .kt {
  color: #66d9ef;
} /* Keyword.Type */
.content >>> .highlight .ld {
  color: #e6db74;
} /* Literal.Date */
.content >>> .highlight .m {
  color: #ae81ff;
} /* Literal.Number */
.content >>> .highlight .s {
  color: #e6db74;
} /* Literal.String */
.content >>> .highlight .na {
  color: #a6e22e;
} /* Name.Attribute */
.content >>> .highlight .nb {
  color: #f8f8f2;
} /* Name.Builtin */
.content >>> .highlight .nc {
  color: #a6e22e;
} /* Name.Class */
.content >>> .highlight .no {
  color: #66d9ef;
} /* Name.Constant */
.content >>> .highlight .nd {
  color: #a6e22e;
} /* Name.Decorator */
.content >>> .highlight .ni {
  color: #f8f8f2;
} /* Name.Entity */
.content >>> .highlight .ne {
  color: #a6e22e;
} /* Name.Exception */
.content >>> .highlight .nf {
  color: #a6e22e;
} /* Name.Function */
.content >>> .highlight .nl {
  color: #f8f8f2;
} /* Name.Label */
.content >>> .highlight .nn {
  color: #f8f8f2;
} /* Name.Namespace */
.content >>> .highlight .nx {
  color: #a6e22e;
} /* Name.Other */
.content >>> .highlight .py {
  color: #f8f8f2;
} /* Name.Property */
.content >>> .highlight .nt {
  color: #f92672;
} /* Name.Tag */
.content >>> .highlight .nv {
  color: #f8f8f2;
} /* Name.Variable */
.content >>> .highlight .ow {
  color: #f92672;
} /* Operator.Word */
.content >>> .highlight .w {
  color: #f8f8f2;
} /* Text.Whitespace */
.content >>> .highlight .mb {
  color: #ae81ff;
} /* Literal.Number.Bin */
.content >>> .highlight .mf {
  color: #ae81ff;
} /* Literal.Number.Float */
.content >>> .highlight .mh {
  color: #ae81ff;
} /* Literal.Number.Hex */
.content >>> .highlight .mi {
  color: #ae81ff;
} /* Literal.Number.Integer */
.content >>> .highlight .mo {
  color: #ae81ff;
} /* Literal.Number.Oct */
.content >>> .highlight .sa {
  color: #e6db74;
} /* Literal.String.Affix */
.content >>> .highlight .sb {
  color: #e6db74;
} /* Literal.String.Backtick */
.content >>> .highlight .sc {
  color: #e6db74;
} /* Literal.String.Char */
.content >>> .highlight .dl {
  color: #e6db74;
} /* Literal.String.Delimiter */
.content >>> .highlight .sd {
  color: #e6db74;
} /* Literal.String.Doc */
.content >>> .highlight .s2 {
  color: #e6db74;
} /* Literal.String.Double */
.content >>> .highlight .se {
  color: #ae81ff;
} /* Literal.String.Escape */
.content >>> .highlight .sh {
  color: #e6db74;
} /* Literal.String.Heredoc */
.content >>> .highlight .si {
  color: #e6db74;
} /* Literal.String.Interpol */
.content >>> .highlight .sx {
  color: #e6db74;
} /* Literal.String.Other */
.content >>> .highlight .sr {
  color: #e6db74;
} /* Literal.String.Regex */
.content >>> .highlight .s1 {
  color: #e6db74;
} /* Literal.String.Single */
.content >>> .highlight .ss {
  color: #e6db74;
} /* Literal.String.Symbol */
.content >>> .highlight .bp {
  color: #f8f8f2;
} /* Name.Builtin.Pseudo */
.content >>> .highlight .fm {
  color: #a6e22e;
} /* Name.Function.Magic */
.content >>> .highlight .vc {
  color: #f8f8f2;
} /* Name.Variable.Class */
.content >>> .highlight .vg {
  color: #f8f8f2;
} /* Name.Variable.Global */
.content >>> .highlight .vi {
  color: #f8f8f2;
} /* Name.Variable.Instance */
.content >>> .highlight .vm {
  color: #f8f8f2;
} /* Name.Variable.Magic */
.content >>> .highlight .il {
  color: #ae81ff;
} /* Literal.Number.Integer.Long */
</style>