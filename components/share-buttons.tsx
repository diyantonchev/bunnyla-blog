import { useState } from 'react'

type Props = {
  title: string
  slug: string
}

const ShareButtons = ({ title, slug }: Props) => {
  const [copied, setCopied] = useState(false)

  const getUrl = () => {
    if (typeof window !== 'undefined') {
      return `${window.location.origin}/posts/${slug}`
    }
    return `/posts/${slug}`
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(getUrl())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
  }

  const shareOnFacebook = () => {
    const url = encodeURIComponent(getUrl())
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  const shareOnTwitter = () => {
    const text = encodeURIComponent(`${title}`)
    const url = encodeURIComponent(getUrl())
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted">Share:</span>
      <button
        onClick={copyLink}
        aria-label="Copy link"
        className="glass-card rounded-full w-9 h-9 flex items-center justify-center hover:bg-white/10 transition-all duration-200 cursor-pointer"
        title="Copy link"
      >
        {copied ? (
          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        )}
      </button>
      <button
        onClick={shareOnFacebook}
        aria-label="Share on Facebook"
        className="glass-card rounded-full w-9 h-9 flex items-center justify-center hover:bg-white/10 transition-all duration-200 cursor-pointer"
        title="Share on Facebook"
      >
        <svg className="w-4 h-4 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.092.065 1.543.13v3.294a9 9 0 0 0-.838-.042c-1.19 0-1.65.45-1.65 1.622v2.554h2.338l-.475 3.667h-1.863v8.143C17.514 23.057 21 19.384 21 14.957 21 10.093 17.134 6.227 12.27 6.227S3 10.093 3 14.957c0 3.455 2.085 6.479 5.101 7.734" />
        </svg>
      </button>
      <button
        onClick={shareOnTwitter}
        aria-label="Share on Twitter"
        className="glass-card rounded-full w-9 h-9 flex items-center justify-center hover:bg-white/10 transition-all duration-200 cursor-pointer"
        title="Share on Twitter"
      >
        <svg className="w-4 h-4 text-purple-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </button>
    </div>
  )
}

export default ShareButtons
