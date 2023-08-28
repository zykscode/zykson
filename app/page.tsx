import CoverWrapper from "#/components/cover-wrapper";
import React from "react";

import Me from "#/public/static/images/me.jpg";
import IconHero from "#/components/IconHero";
import { siteConfig } from "#/config/site";
import Aside from "#/components/Aside";
const Page = ({ children, ...props }: any) => {
  return (
    <div className="page-scroller">
      <CoverWrapper img={Me} />
      <div className="mx-auto h-screen max-w-4xl py-6 lg:py-10 page bg-yellow-100 page-has-cover page-has-icon page-has-image-icon full-page index-page">
        <IconHero />
        <h1 className="title md:mt-6 lg:mt-10">{siteConfig.name}</h1>
        <div className="page-content page-content-has-aside">
        <article className="page-content-inner">
          <div className="collection block">
            <div className="collection-header">
              <div className="collection-header-title">Blog Posts</div>
            </div>
         {/*    {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post, index) => (
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
      )}*/}
          </div>
        </article>
    <Aside />
      </div>
      </div>
    </div>
  );
};

export default Page;
