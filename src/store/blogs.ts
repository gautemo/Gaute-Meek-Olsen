import { computed, ComputedRef, reactive, ref } from 'vue'
import { getKey, getUrl, getCoverImg } from '../utils/blogUtils'
const blogFiles = import.meta.glob('../blog/*.md')

type Blog = { title: string, key: string, url: string, cover: string, tags: string[], date: Date }

const allBlogs = ref<Blog[]>([])
const blogs = computed(() => allBlogs.value.filter(blog => selectedTags.value.every(tag => blog.tags.includes(tag))))
const selectedTags = ref<string[]>([])
const tags = computed(() =>
  Array.from(
    new Set(blogs.value.flatMap(b => b.tags))
  ).filter(tag => !selectedTags.value.includes(tag))
)
const search = ref('')

const loadList = async () => {
  const blogPromises = Object.entries(blogFiles).map(([_, mod]) => mod())
  const blogPages = await Promise.all(blogPromises)
  allBlogs.value = blogPages.map((it):Blog => {
    const pageData = JSON.parse(it.__pageData)
    const key = getKey(pageData.relativePath)
    return {
      title: pageData.title,
      key,
      url: getUrl(pageData.relativePath),
      cover: getCoverImg(key),
      tags: pageData.frontmatter.tags,
      date: new Date(pageData.frontmatter.date)
    }
  }).sort((a,b) => b.date.getTime() - a.date.getTime())
}
loadList()

export { blogs, tags, selectedTags, search }