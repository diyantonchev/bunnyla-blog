import { useState, useCallback } from 'react'

type Particle = {
  id: number
  emoji: string
  left: number
  delay: number
  duration: number
  size: number
}

const emojis = ['🐰', '🥕', '🌸', '💜', '✨', '🐾', '💫', '🌷']

const EmojiRain = () => {
  const [particles, setParticles] = useState<Particle[]>([])
  const [raining, setRaining] = useState(false)

  const startRain = useCallback(() => {
    if (raining) return
    setRaining(true)

    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: Date.now() + i,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      left: Math.random() * 100,
      delay: Math.random() * 1.5,
      duration: 2 + Math.random() * 2,
      size: 16 + Math.random() * 20,
    }))

    setParticles(newParticles)
    setTimeout(() => {
      setParticles([])
      setRaining(false)
    }, 4000)
  }, [raining])

  return (
    <>
      <button
        onClick={startRain}
        className="text-5xl md:text-6xl mb-4 animate-float cursor-pointer hover:scale-125 transition-transform duration-200 select-none"
        aria-label="Click for a surprise"
        title="Click me!"
      >
        🐰
      </button>

      {particles.length > 0 && (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
          {particles.map((p) => (
            <span
              key={p.id}
              className="absolute animate-emoji-fall"
              style={{
                left: `${p.left}%`,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
                fontSize: `${p.size}px`,
              }}
            >
              {p.emoji}
            </span>
          ))}
        </div>
      )}
    </>
  )
}

export default EmojiRain
