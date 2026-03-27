import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex items-center gap-3 mb-16 mt-8 animate-slide-in">
      <Link
        href="/"
        className="group flex items-center gap-3 glass-card rounded-full px-5 py-2.5 hover:bg-white/10 transition-all duration-300"
      >
        <svg
          className="w-4 h-4 text-purple-400 group-hover:-translate-x-1 transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="heading-font text-lg font-bold gradient-text">
          Bunnyla's Blog
        </span>
      </Link>
    </header>
  )
}

export default Header
