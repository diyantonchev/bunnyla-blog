import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
  readingTime?: string
}

const PostHeader = ({ title, coverImage, date, author, readingTime }: Props) => {
  return (
    <div className="animate-fade-in">
      <PostTitle>{title}</PostTitle>
      <div className="flex flex-wrap items-center gap-4 mb-10">
        <Avatar name={author.name} picture={author.picture} />
        <span className="w-px h-5 bg-white/10" />
        <span className="badge-purple">
          <DateFormatter dateString={date} />
        </span>
        {readingTime && (
          <>
            <span className="w-px h-5 bg-white/10" />
            <span className="badge-pink">{readingTime}</span>
          </>
        )}
      </div>
      <div className="mb-10 md:mb-16 rounded-3xl overflow-hidden animate-fade-in-up shadow-glow max-w-3xl mx-auto">
        <CoverImage title={title} src={coverImage} />
      </div>
    </div>
  )
}

export default PostHeader
