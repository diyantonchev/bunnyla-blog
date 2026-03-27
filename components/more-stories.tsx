import PostPreview from './post-preview'
import type Post from '../interfaces/post'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section className="relative">
      {/* Decorative blob */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <h2 className="heading-font mb-10 text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-white animate-fade-in">
        More Stories
        <span className="block h-1 w-16 mt-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 mb-32">
        {posts.map((post, index) => (
          <div
            key={post.slug}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <PostPreview
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default MoreStories
