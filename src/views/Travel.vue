<template>
  <div class="travel">
    <h1>My Travel Blog</h1>
    <p>I don't usually travel much, but when I do, you might see some content here.</p>
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
        :url="'travel-blog/' + blog.url"
      />
    </div>
    <p v-if="filteredBlogs.length === 0">
      I'm sorry but I have not visited '{{filterSearch}}'
      <span v-if="filterTags.length > 0">
        with the tag(s)
        <b v-for="t in filterTags" v-bind:key="t">{{t}}</b>
      </span>
      yet. Maybe I should go there?
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogElement from '@/components/BlogElement.vue'
import SearchAndFilter from '@/components/SearchAndFilter.vue'
import { blogs } from './travel/TravelBlog.vue'

export default {
  name: 'travel',
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
.travel {
  margin: 50px 250px;
  width: 100%;
}

@media only screen and (max-width: 768px) {
  .travel {
    margin: 25px 10px;
  }
}
</style>
