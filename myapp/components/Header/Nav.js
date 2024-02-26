'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Nav = ({user}) => {
  return (
    <nav>
        {
            !user 
            ?<>
              <button className='btn btn_icon'
                    onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                  >
                  </button>
            </>
            :
            <>
                <Link href={`/profile/${user?._id}`} className='avatar'>
                    <Image src={user?.avatar} alt={user?.name}
                    width={40} height={40} sizes='25vw' />
                  </Link>
            </>
        }
    </nav>
  )
}

export default Nav