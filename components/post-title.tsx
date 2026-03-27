import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="heading-font text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-6 text-center md:text-left text-white">
      {children}
    </h1>
  )
}

export default PostTitle
