'use client'
import React, { useState } from 'react'

import Link from 'next/link';
import Image from 'next/image';
import { navLinks, socialLinks } from '@/constants/index'
import { menu } from '@/assets/index';

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false);
  return (
      <nav className={`w-full flex items-center py-5 fixed top-0 z-20 bg-gradient-to-b from-primary`}>
          <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
              <Link href="/"
                  className='flex items-center gap-2'
                  onClick={() => {
                      setActive("");
                      window.scrollTo(0, 0)
                  }}
              >
                  {/* <img className='w-2/5' src={logoBeLinked} alt="BeLinked logo with a font with light effect" /> */}
                  <div className='ml-2 text-center'>
                      <h1 className='font-horizon text-3xl logo-neon leading-none text-white'>BELINKED</h1>
                      <p className='font-aileron text-[9px] tracking-[.25em] leading-none'>CONNECTING PEOPLE</p>
                  </div>
              </Link>
              <ul className='list-none hidden sm:flex flex-row gap-10'>
                  {navLinks.map((Link) => (
                      <li key={Link.id}
                          className={`${active === Link.title
                              ? "text-white"
                              : "text-secondary"
                              } hover:text-white p-1 rounded-md border-b text-[18px] font-medium cursor-pointer leading-none`}
                          onClick={() => setActive(Link.title)}>
                          <a href={`${Link.id}`}>{Link.title}</a>
                      </li>
                  ))}
                  <div
                      className={`flex space-x-6 mx-auto my-auto text-white font-poppins font-medium cursor-pointer text-[14px]`}
                  >
                      {socialLinks.map((socialLink) => (
                          <li key={socialLink.title} >
                              <div>
                                  <a href={socialLink.url} target="_blank" rel="noopener noreferrer"><i className={socialLink.icon}></i></a>
                              </div>
                          </li>
                      ))}
                  </div>
              </ul>
              <div className='sm:hidden flex flex-1 justify-end items-center'>
                  <Image
                      src={toggle ? close : menu}
                      alt='menu'
                      className='w-[28px] h-[28px] object-contain cursor-pointer'
                      onClick={() => setToggle(!toggle)}
                  />
              </div>
              <div
                  className={`${!toggle ? "hidden" : "flex"
                      } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
              >
                  <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                      {navLinks.map((Link) => (
                          <li key={Link.id}
                              className={`text-white font-poppins font-medium cursor-pointer text-[18px]`}
                              onClick={() => {
                                  setToggle(!toggle);
                                  setActive(Link.title);
                              }}>
                              <a href={`#${Link.id}`}>{Link.title}</a>
                          </li>
                      ))}
                      <div
                          className={`flex space-x-6 mx-auto my-auto text-white font-poppins font-medium cursor-pointer text-[18px]`}
                      >
                          {socialLinks.map((socialLink) => (
                              <li key={socialLink.title} >
                                  <div>
                                      <a href={socialLink.url} target="_blank" rel="noopener noreferrer"><i className={socialLink.icon}></i></a>
                                  </div>
                              </li>
                          ))}
                      </div>
                  </ul>
              </div>
          </div>

      </nav>
  )
}

export default Navbar