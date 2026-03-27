import { useRouter } from 'next/router'

type Props = {
  slugs: string[]
}

const RandomPostButton = ({ slugs }: Props) => {
  const router = useRouter()

  const goToRandom = () => {
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)]
    router.push(`/posts/${randomSlug}`)
  }

  if (slugs.length < 2) return null

  return (
    <button
      onClick={goToRandom}
      className="group glass-card glass-card-hover rounded-full px-5 py-2.5 flex items-center gap-2 text-sm font-medium text-purple-300 hover:text-white transition-all duration-300 cursor-pointer"
    >
      <span className="text-lg group-hover:animate-float">🎲</span>
      Surprise me!
    </button>
  )
}

export default RandomPostButton
