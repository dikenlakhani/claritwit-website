import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const navbar = () => {
  return (
    <nav className='flex-center fixed top-0 z-50 w-full border-b-2 bg-black-100  border-black-200 py-6 text-white'>
        <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
            <Link href="/">
                <Image 
                    src="/logo-claritwit-only.svg" 
                    alt="logo"
                    priority={true} 
                    width={40}
                    height={40} />
            </Link>
            <Image 
                src="/hamburger-menu.svg" 
                width={30}
                height={30}
                alt="Hamburger menu"
                className='block md:hidden'/>
            <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'>
              <li className='body-semibold text-gradient_blue-purple  '>
                <Link href="https://jsmastery.pro/next13" target='_blank'>Service</Link>
              </li>
              <li className='body-semibold text-gradient_blue-purple  '>
                <Link href="https://jsmastery.pro/next13" target='_blank'>Blog</Link>
              </li>
              <li className='body-semibold text-gradient_blue-purple  '>
                <Link href="https://jsmastery.pro/next13" target='_blank'>About US</Link>
              </li>
              <li className='body-semibold text-gradient_blue-purple  '>
                <Link href="https://jsmastery.pro/next13" target='_blank'>Blog</Link>
              </li>
            </ul>
        </div>
    </nav>
  )
}

export default navbar