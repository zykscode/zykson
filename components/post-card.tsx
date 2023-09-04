/* eslint-disable @typescript-eslint/no-explicit-any */
import { Post } from '#/.contentlayer/generated'
import { format, parseISO } from 'date-fns'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import Link from 'next/link'

const PostCard = ({ post, image }: any) => {
  const src = image.src

  return (
    <div className="mb-8 collection-card collection-card-size-medium">
      <div className="collection-card-cover ">
        <Image
          placeholder="blur"
          src={src.substring(6)}
          alt={'jjjjj'}
          height={image.height}
          width={image.width}
          blurDataURL={image.base64}
        />
      </div>

      <div className="collection-card-body">
        <div className="collection-card-property">
          <span className="property property-title">
            <span className="page-link">
              <span className="page-title">
                <span className="page-title-text">{post.title}</span>
              </span>
            </span>
          </span>
        </div>
        <div className="collection-card-property">
          <span className="property property-text">{post.summary}</span>
        </div>
        <div className="collection-card-property">
          <span className="property property-date">
            <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
              {format(parseISO(post.date), 'LLLL d, yyyy')}
            </time>
          </span>
        </div>
        <div className="collection-card-property">
          <span className="property property-multi_select">
            {post.tags!.map((tag) => {
              return (
                <div key={tag.name} className={`property-multi_select-item item-yellow`}>
                  {tag.name}
                </div>
              )
            })}
          </span>
        </div>
      </div>
    </div>
  )
}

export default PostCard
