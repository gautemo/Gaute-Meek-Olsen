const getKey = (relativePath: string) => relativePath.replace('blog/', '').replace('.md', '')

const getUrl = (relativePath: string) => relativePath.replace('.md', '')

const getCoverImg = (key: string) => new URL(`../blog/assets/cover-${key}.jpg`, import.meta.url)

export { getKey, getUrl, getCoverImg }