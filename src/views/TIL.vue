<template>
  <div class="til">
    <h1>Today I learned</h1>
    <div class="grid">
      <div v-for="b in blogs" :key="b.type">
        <header>
          <div class="icon" v-html="b.icon"></div>
          <h2>{{b.type}}</h2>
        </header>
        <ul>
          <li v-for="link in b.links" :key="link.url">
            <a :href="'today-i-learned/' + link.url">{{link.title}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { til } from './til/TILBlog.vue'

export default {
  name: 'til',
  computed: {
    blogs () {
      return til.filter(t => t.links.length > 0)
    }
  },
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style scoped>
.til {
  margin: 50px 250px;
  min-width: 70%;
  max-width: 90%;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 30px;
  min-width: 70%;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 10px 0;
}

header {
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-gap: 10px;
  align-items: center;
  border-bottom: 1px solid var(--black);
}

.icon >>> svg {
  width: 100%;
  height: 100%;
}
</style>
