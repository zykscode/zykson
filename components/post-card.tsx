
import { Post } from "#/.contentlayer/generated"
import { format, parseISO } from "date-fns"
import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import Link from "next/link"


const PostCard =({post,image}:any)=> {
 const src = image.src
 
  return (
      <div className="mb-8">
          <div className="collection-card-cover">
     
          <Image
          placeholder="blur"
          src={src.substring(6)}
          alt={'jjjjj'}
          height={image.height}
          width={image.width}
          blurDataURL={image.base64}
          /> 
      </div>
        <h2 className="mb-1 text-xl">
          <Link href={post.url} className="text-blue-700 hover:text-blue-900 dark:text-blue-400">
            {post.title}
          </Link>
        </h2>
        <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <div className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} />
      </div>
    )
  }

  export default PostCard