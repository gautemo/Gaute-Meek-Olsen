<template>
  <component :is="comp"></component>
</template>

<script>
const css = [
  {
    title: "Empty selector",
    url: "css-empty",
    comp: "2019-08-08CSSEmpty"
  },
  {
    title: "Import files based on condition",
    url: "css-import-condition",
    comp: "2019-07-10CSSImport"
  }
];

const vue = [];

const android = [
  {
    title: "Button with image and text",
    url: "android-button-img-text",
    comp: "2019-08-06AndroidButtonImgText"
  }
];

const til = [
  {
    type: "Android",
    links: android
  },
  {
    type: "CSS",
    links: css
  },
  {
    type: "Vue",
    links: vue
  }
];

export { til };

const getComp = url => {
  for (const type of til) {
    const blog = type.links.find(b => b.url === url);
    if (blog) {
      return blog;
    }
  }
};

export default {
  name: "TILBlog",
  created() {
    const blog = getComp(this.$route.params.url);
    if (blog) {
      this.comp = () => import(`./${blog.comp}.vue`);
    } else {
      this.comp = () => import(`@/views/NotFound.vue`);
    }
  }
};
</script>
