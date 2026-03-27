export function getReadingTime(content: string): string {
  const wordsPerMinute = 200
  const text = content.replace(/<[^>]*>/g, '').replace(/[#*_~`>-]/g, '')
  const words = text.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute))
  return `${minutes} min read`
}
