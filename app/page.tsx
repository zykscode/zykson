import CoverWrapper from '#/components/cover-wrapper'
import React from 'react'

import Me from '#/public/static/images/me.jpg';
import IconHero from '#/components/IconHero';
import { siteConfig } from '#/config/site';
const Page = ({ children, ...props}:any) => {
  return (
    <div className="page-scroller">
        <CoverWrapper img={Me}/>
    <div className='mx-auto h-screen max-w-4xl py-6 lg:py-10 page bg-yellow-100 page-has-cover page-has-icon page-has-image-icon full-page index-page'>
    <IconHero/>
    <h1 className='title md:mt-6 lg:mt-10'>{siteConfig.name}</h1>
    </div>
    </div>
  )
}

export default Page