import { PageData } from 'vitepress'
import { computed, ref } from 'vue'
import { getKey, getUrl, getCoverImg } from '../../utils/blogUtils'
const blogFiles = import.meta.glob<PageData>('../*.md', { import: '__pageData', eager: true })

type Blog = { title: string; key: string; url: string; cover: string; tags?: string[]; date: Date; series?: string }

const allBlogs = Object.values(blogFiles)
  .map((it) => {
    const key = getKey(it.relativePath)
    return {
      title: it.title,
      key,
      url: getUrl(it.relativePath),
      cover: getCoverImg(key, it.frontmatter.coverImgExtension),
      tags: it.frontmatter.tags,
      date: new Date(it.frontmatter.date),
      series: it.frontmatter.series,
    } as Blog
  })
  .sort((a, b) => b.date.getTime() - a.date.getTime())

const blogs = computed(() => {
  return allBlogs.filter((blog) => {
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
