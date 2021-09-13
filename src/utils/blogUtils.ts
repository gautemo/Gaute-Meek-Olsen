const getKey = (relativePath: string) => relativePath.replace('dev-blog/', '').replace('.md', '')

const getUrl = (relativePath: string) => relativePath.replace('.md', '')

const getCoverImg = (key: string) => new URL(`../dev-blog/assets/cover-${key}.jpg`, import.meta.url).href

export { getKey, getUrl, getCoverImg }