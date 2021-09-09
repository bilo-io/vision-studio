import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { Navbar } from '.'

const NavbarContainer = ({ onToggle }: { onToggle: Function }) => {
  const history = useHistory()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    history.listen(() => {
      setVisible(!history.location.pathname?.includes('/auth'))
    })
  }, [])

  return visible
    ? (
      <>
        <Navbar type='desktop' onToggle={onToggle} />
        <Navbar type='mobile' onToggle={onToggle} />
      </>
    )
    : null
}

export default NavbarContainer
