import React from 'react'
import Nav from './Nav'
import getServerUser from '@/lib/getServerUser'

const Header = async () => {
  const user = await getServerUser()
  return (
    <Nav user={user} />
  )
}

export default Header