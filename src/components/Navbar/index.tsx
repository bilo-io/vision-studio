import React, { useEffect, useState } from 'react'
import FAIcon from 'react-fontawesome'
import appLogo from 'assets/vision-logo.png'
import { useHistory } from 'react-router'
import useWindowSize from 'hooks/use-window-size'

export const Navbar = ({ onToggle, type }: { onToggle: Function, type?: string }) => {
  const history = useHistory()
  const goTo = (path: string) => history?.push(path)
  const [activePath, setActivePath] = useState<any>(null)
  const windowSize = useWindowSize()

  useEffect(() => {
    history?.listen?.(() => setActivePath(history?.location?.pathname))
  })

  const itemsMobile = [
    {
      name: 'Menu',
      path: '/menu',
      icon: 'bars',
      onClick: () => onToggle()
    },
    {
      name: 'Explore',
      path: '/explore',
      icon: 'search',
      onClick: () => goTo('/explore')
    },
    {
      main: true,
      name: 'Vision',
      path: '/vision',
      icon: '',
      onClick: () => goTo('/vision')
    },
    {
      name: 'Stats',
      path: '/stats',
      icon: 'chart-pie',
      onClick: () => goTo('/stats')
    },
    {
      name: 'Products',
      path: '/products',
      icon: 'coins',
      onClick: () => goTo('/products')
    }
  ]

  const itemsDesktop = [
    {
      main: true,
      name: 'Vision',
      path: '/vision',
      icon: '',
      onClick: () => goTo('/vision')
    },
    {
      name: 'Profile',
      path: '/profile',
      icon: 'user',
      onClick: () => onToggle()
    },
    {
      name: 'Explore',
      path: '/explore',
      icon: 'search',
      onClick: () => goTo('/explore')
    },
    {
      name: 'Stats',
      path: '/stats',
      icon: 'chart-pie',
      onClick: () => goTo('/stats')
    },
    {
      name: 'Products',
      path: '/products',
      icon: 'coins',
      onClick: () => goTo('/products')
    }
  ]

  const isMobile = windowSize?.width && windowSize?.width < 480
  const renderItems = () => (isMobile ? itemsMobile : itemsDesktop || []).map((item, i) => {
    // const isActive = window.location.pathname.includes(item.path)
    const isActive = activePath?.includes(item.path)
    return (
      <div
        key={i}
        onClick={() => item.onClick()}
        className={ item.main ? 'main-tab' : 'normal-tab'}
        // className={ item.main ? 'normal-tab' : 'normal-tab'}
      >
        <div className="flex-row">
          {
            item.main
              ? (
                <img src={ appLogo } style={{ width: '2.2rem', height: 'auto', margin: 'auto', marginLeft: isMobile ? '.5rem' : '.5rem', marginTop: isMobile ? '.5rem' : '0.3rem' }} alt="logo" />
                // <img src={ appLogo } style={{
                //   width: '2.2rem',
                //   height: 'auto',
                //   margin: 'auto',
                //   marginLeft: isMobile ? '-.5rem' : '.5rem',
                //   marginTop: isMobile ? '-0.25rem' : '0.3rem'
                // }} alt="logo" />
              )
              : (

                <FAIcon name={item.icon} style={{ color: isActive ? '#3AC9E6' : '#AAA' }} />
              )
          }
          <div className="label">{item.name}</div>
        </div>
      </div>
    )
  })

  return (
    <div className={`${type}-navbar`}>
      {
        isMobile
          ? renderItems()
          : (
            <div style={{ height: 'fit-content', display: 'flex', flexDirection: 'column', marginTop: '1rem', marginBottom: 'auto', width: '100%' }}>
              {renderItems()}
            </div>
          )
      }
    </div>
  )
}

Navbar.defaultProps = {
  className: 'mobile'
}

export default Navbar
