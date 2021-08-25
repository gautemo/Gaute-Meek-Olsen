<script setup lang="ts">
import Search from './Search.vue'
import SelectedTags from './SelectedTags.vue'
import Tags from './Tags.vue'
import { blogs } from '../store/blogs'
</script>

<template>
<main>
  <section>
    <Search/>
    <SelectedTags/>
    <Tags/>
  </section>
  <ul>
    <li v-for="blog in blogs" :key="blog.key">
      <a :href="blog.url">
        <img :src="blog.cover" alt="cover image" />
        <div class="content">
          <h2>{{ blog.title }}</h2>
          <ul class="tags">
            <li v-for="tag in blog.tags" :key="tag">{{ tag }}</li>
          </ul>
        </div>
      </a>
    </li>
  </ul>
</main>
</template>

<style scoped>
main{
  margin: 25px 15vw;
}

section{
  display: flex;
  gap: 10px;
}

ul {
  list-style: none;
  margin: 25px 15vw;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 35px;
  height: fit-content;
}

ul > li > a {
  color: inherit;
  text-decoration: inherit;
  display: flex;
  flex-direction: column;
  filter: drop-shadow(0px 4px 6px rgba(51, 51, 51, 0.2));
}

ul > li > a:hover {
  filter: drop-shadow(0px 4px 6px rgba(51, 51, 51, 0.4));
}

ul > li > a > img {
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}

.content {
  background: rgb(241, 243, 245);
  margin: 0;
  padding-bottom: 1rem;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 0 0 5px 5px;
}

.content > h2 {
  border-bottom: none;
}

.tags {
  width: 100%;
  padding: 0 1rem;
  display: flex;
  gap: 6px;
}

.tags > li {
  background: rgba(177, 177, 177, 0.6);
  border-radius: 3px;
  padding: 5px 8px;
  white-space: nowrap;
  display: inline-block;
}
</style>