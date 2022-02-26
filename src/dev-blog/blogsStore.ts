import { asyncComputed } from '@vueuse/core'
import { computed, ref } from 'vue'
import { getKey, getUrl, getCoverImg } from '../utils/blogUtils'
const blogFiles = import.meta.glob('../dev-blog/*.md')

type Blog = { title: string; key: string; url: string; cover: string; tags?: string[]; date: Date; series?: string }

const allBlogs = asyncComputed<Blog[]>(
  async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const blogPromises = Object.entries(blogFiles).map(([_, mod]) => mod())
    return (await Promise.all(blogPromises))
      .map((it) => {
        const pageData = JSON.parse(it.__pageData)
        const key = getKey(pageData.relativePath)
        return {
          title: pageData.title,
          key,
          url: getUrl(pageData.relativePath),
          cover: getCoverImg(key, pageData.frontmatter.coverImgExtension),
          tags: pageData.frontmatter.tags,
          date: new Date(pageData.frontmatter.date),
          series: pageData.frontmatter.series,
        }
      })
      .sort((a, b) => b.date.getTime() - a.date.getTime())
  },
  [],
  { lazy: true }
)
const blogs = computed(() => {
  return allBlogs.value.filter((blog) => {
    const searchLowercase = search.value.toLowerCase()
    const tagMatch = selectedTags.value.every((tag) => blog.tags?.includes(tag))
    const searchTitleMatch = blog.title.toLowerCase().includes(searchLowercase)
    const searchTagMatch = blog.tags?.some((tag) => tag.toLowerCase() === searchLowercase)
    return tagMatch && (searchTitleMatch || searchTagMatch)
  })
})
const selectedTags = ref<string[]>([])
const tags = computed(() =>
  Array.from(new Set(blogs.value.flatMap((b) => b.tags ?? []))).filter((tag) => !selectedTags.value.includes(tag))
)
const search = ref('')

export { allBlogs, blogs, tags, selectedTags, search }
