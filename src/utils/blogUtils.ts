const getKey = (relativePath: string) => relativePath.replace('dev-blog/', '').replace('.md', '')

const getUrl = (relativePath: string) => relativePath.replace('.md', '')

const getCoverImg = (key: string, extension: 'jpg' | 'png' = 'jpg') => `/images/dev-blog/cover-${key}.${extension}`

export { getKey, getUrl, getCoverImg }
