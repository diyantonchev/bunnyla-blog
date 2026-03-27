import cn from 'classnames'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('w-full h-full object-cover', {
        'group-hover:scale-105 transition-transform duration-700 ease-out': slug,
      })}
      width={1300}
      height={630}
    />
  )
  return (
    <div className="overflow-hidden h-full">
      {slug ? (
        <div className="relative h-full">
          {image}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
