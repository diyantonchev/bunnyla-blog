import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'
import ReadingProgress from '../../components/reading-progress'
import BackToTop from '../../components/back-to-top'
import ShareButtons from '../../components/share-buttons'
import { getReadingTime } from '../../lib/readingTime'

type Props = {
  post: PostType
  readingTime: string
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post, readingTime, morePosts, preview }: Props) {
  const router = useRouter()
  const title = `${post.title} | Bunnyla's blog`
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <ReadingProgress />
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{title}</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                readingTime={readingTime}
              />
              <PostBody content={post.content} />
              <div className="max-w-2xl mx-auto mt-12 pt-8 border-t border-white/5">
                <ShareButtons title={post.title} slug={post.slug} />
              </div>
            </article>
          </>
        )}
      </Container>
      <BackToTop />
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')
  const readingTime = getReadingTime(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
      readingTime,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
