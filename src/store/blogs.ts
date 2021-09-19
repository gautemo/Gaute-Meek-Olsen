import { computed, ref } from 'vue'
import { getKey, getUrl, getCoverImg } from '../utils/blogUtils'
const blogFiles = import.meta.glob('../dev-blog/*.md')

type Blog = { title: string, key: string, url: string, cover: string, tags?: string[], date: Date, serie?: string }

const allBlogs = ref<Blog[]>([])
const blogs = computed(() => {
  return allBlogs.value.filter(blog => {
    const searchLowercase = search.value.toLowerCase()
    const tagMatch = selectedTags.value.every(tag => blog.tags?.includes(tag))
    const searchTitleMatch = blog.title.toLowerCase().includes(searchLowercase)
    const searchTagMatch = blog.tags?.some(tag => tag.toLowerCase() === searchLowercase)
    return tagMatch && (searchTitleMatch || searchTagMatch)
  })
}) 
const selectedTags = ref<string[]>([])
const tags = computed(() =>
  Array.from(
    new Set(blogs.value.flatMap(b => b.tags ?? []))
  ).filter(tag => !selectedTags.value.includes(tag))
)
const search = ref('')

const loadList = async () => {
  const blogPromises = Object.entries(blogFiles).map(([_, mod]) => mod())
  const blogPages = await Promise.all(blogPromises)
  allBlogs.value = blogPages.map(it => {
    const pageData = JSON.parse(it.__pageData)
    const key = getKey(pageData.relativePath)
    return {
      title: pageData.title,
      key,
      url: getUrl(pageData.relativePath),
      cover: getCoverImg(key, pageData.frontmatter.coverImgExtension),
      tags: pageData.frontmatter.tags,
      date: new Date(pageData.frontmatter.date),
      serie: pageData.frontmatter.serie,
    }
  }).sort((a,b) => b.date.getTime() - a.date.getTime())
}
loadList()

export { allBlogs, blogs, tags, selectedTags, search }