/* eslint-disable @typescript-eslint/no-explicit-any */
import CoverWrapper from '#/components/cover-wrapper'
import React from 'react'

import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'

import Me from '#/public/static/images/me.jpg'
import IconHero from '#/components/IconHero'
import { siteConfig } from '#/config/site'
import Aside from '#/components/Aside'
import PostCard from '#/components/post-card'
import fs from 'node:fs/promises'
import { globSync } from 'glob'
import { getPlaiceholder } from 'plaiceholder'

const getImages = async (pattern: string) =>
  Promise.all(
    globSync(pattern).map(async (file) => {
      const src = file.replace('./public', '')
      const buffer = await fs.readFile(file)

      const {
        base64,
        metadata: { height, width },
      } = await getPlaiceholder(buffer)

      return { base64, src, height, width }
    })
  )

const Page = async ({ children, ...props }: any) => {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))
  const images = await getImages('./public/images/blog/*.{jpg,png}')
  const updatedPosts = posts.map((post) => {
    const updatedImage = images.find((image) => `public${post.image!}` === image.src)
    console.log(updatedImage, 'updatrehhhrer eer h jkjkkk')
    return { ...post, image: updatedImage }
  })

  return (
    <div className="page-scroller">
      <CoverWrapper img={Me} />
      <div className="mx-auto max-w-4xl py-6 lg:py-10 page  page-has-cover bg-green-300 page-has-icon page-has-image-icon full-page index-page">
        <IconHero />
        <h1 className="title md:mt-6 lg:mt-10">{siteConfig.name}</h1>
        <div className="page-content page-content-has-aside">
          <article className="page-content-inner">
            <div className="collection block">
              <div className="collection-header">
                <div className="collection-header-title">Blog Posts</div>
              </div>
              {posts?.length ? (
                <div className="grid gap-10 sm:grid-cols-2">
                  {/* {posts.map((post, index) => (
            <article
              key={post._id}
              className="group relative flex flex-col space-y-2"
            >
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={804}
                  height={452}
                  className="rounded-md border bg-muted transition-colors"
                  priority={index <= 1}
                />
              )}
              <h2 className="text-2xl font-extrabold">{post.title}</h2>
              {post.description && (
                <p className="text-muted-foreground">{post.description}</p>
              )}
              {post.date && (
                <p className="text-sm text-muted-foreground">
                  {formatDate(post.date)}
                </p>
              )}
              <Link href={post.slug} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))} 
        </div>
      ) : (
        <p>No posts published.</p>
      )} */}

                  {updatedPosts.map((post, idx) => (
                    <PostCard post={post} key={post.title} image={post.image} />
                  ))}
                </div>
              ) : (
                <p>No posts published.</p>
              )}{' '}
            </div>
          </article>
          <Aside />
        </div>
      </div>
    </div>
  )
}

export default Page
