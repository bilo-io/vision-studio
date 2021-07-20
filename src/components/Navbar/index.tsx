import React, { useEffect, useState } from 'react'
import FAIcon from 'react-fontawesome'
import appLogo from 'assets/vision-logo.png'
import { useHistory } from 'react-router'
import useWindowSize from 'hooks/use-window-size'

import { createNav as createStocksNav } from 'app/stocks/router'

export const Navbar = ({ onToggle, type }: { onToggle: Function, type?: string }) => {
  const history = useHistory()
  const goTo = (path: string) => history?.push(path)
  const [activePath, setActivePath] = useState<any>(null)

  const windowSize = useWindowSize()
  const isMobile = windowSize?.width && windowSize?.width < 480

  useEffect(() => {
    history?.listen?.(() => setActivePath(history?.location?.pathname))
  })

  const stocksNav = createStocksNav?.({ goTo, onToggle })
  const itemsMobile = stocksNav?.mobile
  const itemsDesktop = stocksNav?.all

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
