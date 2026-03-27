import { useState } from 'react'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'

type Props = {
  allPosts: Post[]
  allTags: string[]
}

export default function Index({ allPosts, allTags }: Props) {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered = activeTag
    ? allPosts.filter((p) => p.tags?.includes(activeTag))
    : allPosts

  const heroPost = filtered[0]
  const morePosts = filtered.slice(1)
  const allSlugs = allPosts.map((p) => p.slug)

  return (
    <>
      <Layout>
        <Head>
          <title>Bunnyla's Blog</title>
        </Head>
        <Container>
          <Intro
            slugs={allSlugs}
            tags={allTags}
            activeTag={activeTag}
            onTagChange={setActiveTag}
          />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          {filtered.length === 0 && (
            <p className="text-center text-muted text-lg py-20">
              No posts found for this tag.
            </p>
          )}
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
    'tags',
  ])

  const tagSet = new Set<string>()
  allPosts.forEach((p: any) => {
    if (Array.isArray(p.tags)) {
      p.tags.forEach((t: string) => tagSet.add(t))
    }
  })

  return {
    props: { allPosts, allTags: Array.from(tagSet).sort() },
  }
}
