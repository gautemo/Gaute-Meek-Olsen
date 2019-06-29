<template>
  <div class="blogs">
    <h1>Developer Blog</h1>
    <SearchAndFilter
      :tags="tags"
      v-on:update-search="updateFilterSearch"
      v-on:update-tags="updateFilterTags"
    />
    <div v-for="blog in filteredBlogs" v-bind:key="blog.url">
      <BlogElement
        :img="blog.img"
        :header="blog.header"
        :text="blog.text"
        :tags="blog.tags"
        :url="'dev-blog/' + blog.url"
      />
    </div>
    <p v-if="filteredBlogs.length === 0">
      I'm sorry but I don't have any blogs about '{{filterSearch}}'
      <span
        v-if="filterTags.length > 0"
      >
        with the tag(s)
        <b v-for="t in filterTags" v-bind:key="t">{{t}}</b>
      </span>
      yet. Tweet me at
      <a
        href="https://twitter.com/GauteMeekOlsen"
        target="_blank"
      >@GauteMeekOlsen</a>, maybe I can make one.
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogElement from '@/components/BlogElement.vue'
import SearchAndFilter from '@/components/SearchAndFilter.vue'
import { blogs } from './dev/DevBlog.vue'

export default {
  name: 'dev',
  computed: {
    filteredBlogs: function () {
      return this.blogs.filter(blog => {
        if (this.filterTags.length > 0) {
          for (const t of this.filterTags) {
            if (!blog.tags.includes(t)) {
              return false
            }
          }
        }
        const some = blog.tags.some(tag => {
          return tag.toLowerCase().includes(this.filterSearch.toLowerCase())
        })
        return (
          some ||
          blog.header.toLowerCase().includes(this.filterSearch.toLowerCase())
        )
      })
    },
    tags: function () {
      const allTags = this.filteredBlogs.reduce(
        (tags, blog) => tags.concat(blog.tags),
        []
      )
      return [...new Set(allTags)].sort()
    }
  },
  methods: {
    updateFilterSearch: function (search) {
      this.filterSearch = search
    },
    updateFilterTags: function (tags) {
      this.filterTags = tags
    }
  },
  data () {
    return {
      filterSearch: '',
      filterTags: [],
      blogs: blogs
    }
  },
  components: {
    BlogElement,
    SearchAndFilter
  }
}
</script>

<style scoped>
.blogs {
  margin: 50px 250px;
}

@media only screen and (max-width: 768px) {
  .blogs {
    margin: 25px 15px;
  }
}
</style>
