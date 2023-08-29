import React from 'react'
import Breadcrumbs from './breadcrumbs'
import Navs from './navs'

const Header = () => {
  return (
    <header className="header">
      <div className="nav-header">
        <Breadcrumbs />
        <Navs />
      </div>
    </header>
  )
}

export default Header
