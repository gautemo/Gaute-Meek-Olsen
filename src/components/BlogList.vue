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
  padding-top: 1rem;
  display: flex;
  gap: 10px;
}

ul {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 35px;
  height: fit-content;
}

ul > li > a {
  height: 100%;
  color: inherit;
  text-decoration: inherit;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 2px 1px rgba(51, 51, 51, 0.4);
}

ul > li > a:hover {
  box-shadow: 0 2px 2px 1px rgba(51, 51, 51, 0.8);
}

ul > li > a > img {
  height: 200px;
  width: 100%;
  object-fit: cover;
}

.content {
  flex: 1;
  margin: 0;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}

.content > h2 {
  border-bottom: none;
  font-size: 1.25rem;
  margin: 1rem 15px;
}

.tags {
  width: 100%;
  padding: 0 1rem;
  display: flex;
  gap: 6px;
}

.tags > li {
  background: var(--secondary);
  border-radius: 3px;
  padding: 5px 8px;
  white-space: nowrap;
  display: inline-block;
}

@media only screen and (max-width: 800px) {
  main{
    margin: 25px 5vw;
  }
}
</style>