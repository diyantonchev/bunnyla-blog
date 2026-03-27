const Intro = () => {
  return (
    <section className="relative mt-16 mb-20 md:mb-28 animate-fade-in">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse-soft pointer-events-none" />
      <div className="absolute -top-10 right-0 w-60 h-60 bg-pink-500/10 rounded-full blur-3xl animate-pulse-soft pointer-events-none" style={{ animationDelay: '1.5s' }} />

      <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
        <span className="text-5xl md:text-6xl mb-4 animate-float">🐰</span>
        <h1 className="heading-font text-5xl md:text-8xl font-bold tracking-tighter leading-tight gradient-text mb-4">
          Bunnyla's Blog
        </h1>
        <p className="text-lg md:text-xl text-muted font-medium max-w-lg animate-fade-in-up stagger-2">
          Tales, tips & fluffy adventures from the world's most adorable bunny
        </p>
        <div className="flex gap-3 mt-6 animate-fade-in-up stagger-3">
          <span className="badge-purple">Stories</span>
          <span className="badge-pink">Adventures</span>
          <span className="badge-purple">Bunny Life</span>
        </div>
      </div>
    </section>
  )
}

export default Intro
