import EmojiRain from './emoji-rain'
import RandomPostButton from './random-post-button'

type Props = {
  slugs?: string[]
  tags?: string[]
  activeTag?: string | null
  onTagChange?: (tag: string | null) => void
}

const Intro = ({ slugs = [], tags = [], activeTag = null, onTagChange }: Props) => {
  return (
    <section className="relative mt-16 mb-20 md:mb-28 animate-fade-in">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-soft pointer-events-none" />
      <div className="absolute -top-10 right-0 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl animate-pulse-soft pointer-events-none" style={{ animationDelay: '1.5s' }} />

      <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
        <EmojiRain />
        <h1 className="heading-font text-5xl md:text-8xl font-bold tracking-tighter leading-tight gradient-text mb-4">
          Bunnyla's Blog
        </h1>
        <p className="text-lg md:text-xl text-muted font-medium max-w-lg animate-fade-in-up stagger-2">
          Tales, tips & fluffy adventures from the world's most adorable bunny
        </p>
        <div className="flex flex-wrap items-center gap-3 mt-6 animate-fade-in-up stagger-3">
          {tags.map((tag) => {
            const isActive = activeTag === tag
            return (
              <button
                key={tag}
                onClick={() => onTagChange?.(isActive ? null : tag)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-purple-500 text-white border-purple-500 shadow-glow'
                    : 'badge-purple hover:bg-purple-500/20 border-transparent'
                }`}
              >
                {tag}
              </button>
            )
          })}
          {slugs.length > 0 && (
            <>
              <span className="w-px h-5 bg-white/10 hidden md:block" />
              <RandomPostButton slugs={slugs} />
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Intro
