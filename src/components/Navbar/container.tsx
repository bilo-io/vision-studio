import React from 'react'
import { Navbar } from '.'

const NavbarContainer = ({ onToggle }: { onToggle: Function }) => {
  return (
    <>
      <Navbar type='desktop' onToggle={onToggle} />
      <Navbar type='mobile' onToggle={onToggle} />
    </>
  )
}

export default NavbarContainer
