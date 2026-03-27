import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section className="animate-fade-in-up mb-20 md:mb-28">
      <Link
        as={`/posts/${slug}`}
        href="/posts/[slug]"
        className="group block glass-card glass-card-hover rounded-4xl overflow-hidden transition-all duration-500"
      >
        <div className="md:grid md:grid-cols-2">
          <div className="overflow-hidden max-h-[300px] md:max-h-none">
            <CoverImage title={title} src={coverImage} />
          </div>
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <div className="mb-4">
              <span className="badge-pink">Latest Post</span>
            </div>
            <h3 className="heading-font mb-3 text-2xl lg:text-3xl font-bold leading-tight text-white group-hover:text-purple-300 transition-colors duration-300">
              {title}
            </h3>
            <div className="mb-4">
              <span className="badge-purple">
                <DateFormatter dateString={date} />
              </span>
            </div>
            <p className="text-base leading-relaxed mb-6 text-soft line-clamp-3">{excerpt}</p>
            <div className="flex items-center justify-between">
              <Avatar name={author.name} picture={author.picture} />
              <span className="text-purple-400 group-hover:translate-x-2 transition-transform duration-300 text-sm font-medium flex items-center gap-1">
                Read more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  )
}

export default HeroPost
