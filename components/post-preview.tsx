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

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <Link
      as={`/posts/${slug}`}
      href="/posts/[slug]"
      className="group block glass-card glass-card-hover gradient-border rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
    >
      <div className="overflow-hidden">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="p-6 md:p-8">
        <div className="mb-3">
          <span className="badge-purple">
            <DateFormatter dateString={date} />
          </span>
        </div>
        <h3 className="heading-font text-xl md:text-2xl mb-3 leading-snug font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm leading-relaxed mb-5 text-muted line-clamp-3">{excerpt}</p>
        <div className="flex items-center justify-between">
          <Avatar name={author.name} picture={author.picture} />
          <span className="text-purple-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}

export default PostPreview
