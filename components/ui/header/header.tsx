import React from 'react'
import styles from './style.module.css'
import Breadcrumbs from './breadcrumbs'
import Navs from './navs'

type Props = {}

const Header = (props: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles['nav-header']}>
      <Breadcrumbs />
       <Navs/>
      </div>
    </header>
  )
}

export default Header