

import Head from 'next/head'
import { PostType } from '../../_blog/blog'
import PostBody from './_components/PostBody'
import { PostHeader } from './_components/PageHeader'
import { getAllPosts, getPostBySlug } from '../../_blog/api'
import markdownToHtml from '../../_blog/markdownToHTML'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default async function Post({ params }: { params: { slug: string }}) {
  const { post } = await getProps({params}) as unknown as Props
  // todo:fallback

  const title = `${post.title} | Next.js Blog Example`
  return (
    <>
      <div className="container mx-auto px-5">
        <div className='flex justify-center mb-32 '>
          <article className="prose prose-xl">
            <Head>
              <title>{title}</title>
              <meta property="og:image" content={post.ogImage?.url} />
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage ?? ''}
              date={post.date}
            />
            <PostBody content={post.content} />
          </article>
        </div>
      </div>
    </>
  )
}

type Params = {
  params: {
    slug: string
  }
}

async function getProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
  ])

  const content = await markdownToHtml(post.content || '')

  return {
    post: {
      ...post,
      content,
    },
  }
}

async function getStaticPaths() {
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
