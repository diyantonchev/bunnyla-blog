import Container from './container'

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/5 pointer-events-none" />
      <Container>
        <div className="relative py-16 flex flex-col items-center text-center">
          <span className="text-4xl mb-4 animate-float">🐰</span>
          <h3 className="heading-font text-lg font-bold text-white mb-2">
            Bunnyla's Blog
          </h3>
          <p className="text-muted text-sm">
            Made with love for the fluffiest bunny in the world
          </p>
          <div className="flex gap-2 mt-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400/50" />
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400/50" />
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/50" />
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
