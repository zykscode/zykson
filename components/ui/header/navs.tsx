'use client';


import { ModeToggle } from '#/components/mode-toggle';
import Link from 'next/link';
import React from 'react';


const navs = ['blog', 'portfolio', 'contact'];

const Navs = () => {
  console.log({ todo: 'Navs' });
  return (
    <nav className="nav-header-rhs breadcrumbs">
      {navs.map((nav) => {
        return (
          <Link className="breadcrumb button capitalize" key={nav} href={`/${nav}`}>
            {nav}
          </Link>
        );
      })}
      <ModeToggle/>
    </nav>
  );
};

export default Navs;
