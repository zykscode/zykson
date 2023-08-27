import CoverWrapper from '#/components/cover-wrapper'
import React from 'react'

import Me from '#/public/static/images/me.jpg';
const Page = ({ children, ...props}:any) => {
  return (
    <div className="page-scroller">
        <CoverWrapper img={Me}/>
    <div className='container mx-auto h-screen max-w-4xl py-6 lg:py-10 bg-item_pink'>

    </div>
    </div>
  )
}

export default Page