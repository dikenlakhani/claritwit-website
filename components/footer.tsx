import Link from 'next/link'
import React from 'react'

const footer = () => {
  return (
    <footer className='flex-between body-regular w-full gap-y-10 border-t border-black-400 bg-black-100 px-20 py-12 text-white-800 max-md:flex-col'>
      <p>Copyright © 2024 Claritwit | All Rights Reserved</p>
      <div className='flex gap-x-9'>
        <Link href="/terms-of-use">Terms & Conditions</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>
    </footer>
  )
}

export default footer