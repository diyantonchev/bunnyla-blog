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
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
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
