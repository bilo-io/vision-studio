/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react'
import FAIcon from 'react-fontawesome'
import appLogo from 'assets/vision-logo.png'
import { useHistory } from 'react-router'
import useWindowSize from 'hooks/use-window-size'

import { createNav as createStocksNav } from 'app/stocks'
import { createNav as createSlidesNav } from 'app/slides'
import { createNav as createStartupsNav } from 'app/startups'
import { createNav as createSessionsNav } from 'app/sessions'

// import { createNav as createSchoolsNav } from 'app/schools/router'
// import { createNav as createStatsNav } from 'app/stats/router'
// import { createNav as createStreamsNav } from 'app/streams/router'

export const Navbar = ({ onToggle, type }: { onToggle: Function, type?: string }) => {
  const history = useHistory()
  const windowSize = useWindowSize()
  const isMobile = windowSize?.width && windowSize?.width < 480

  const goTo = (path: string) => history?.push(path)
  const [activePath, setActivePath] = useState<any>(null)
  const [itemsMobile, setItemsMobile] = useState<any[]>([])
  const [itemsDesktop, setItemsDesktop] = useState<any[]>([])

  const stocksNav = createStocksNav?.({ goTo, onToggle })
  const slidesNav = createSlidesNav?.({ goTo, onToggle })
  const sessionsNav = createSessionsNav?.({ goTo, onToggle })
  const startupsNav = createStartupsNav?.({ goTo, onToggle })

  const updateNavFromPath = () => {
    const path = history?.location?.pathname
    const appName = path.split('/')[1]

    setActivePath(path)
    console.log({ path, appName })

    switch (appName) {
    case 'stocks':
      setItemsMobile(stocksNav?.mobile)
      setItemsDesktop(stocksNav?.all)
      break
    case 'slides':
      setItemsMobile(slidesNav?.mobile)
      setItemsDesktop(slidesNav?.all)
      break
    case 'sessions':
      setItemsMobile(sessionsNav?.mobile)
      setItemsDesktop(sessionsNav?.all)
      break
    case 'startups':
      setItemsMobile(startupsNav?.mobile)
      setItemsDesktop(startupsNav?.all)
      break
    default:
      setItemsMobile(stocksNav?.mobile)
      setItemsDesktop(stocksNav?.all)
      break
    }
  }

  useEffect(() => {
    updateNavFromPath()
    history?.listen?.(() => {
      updateNavFromPath()
    })
  }, [])

  useEffect(() => {
    console.log(itemsMobile)
  }, [itemsMobile])

  const renderItems = () => (isMobile ? itemsMobile : itemsDesktop || []).map((item, i) => {
    // const isActive = window.location.pathname.includes(item.path)
    const isActive = activePath?.includes(item.path)
    const color = isActive ? '#3AC9E6' : '#AAA'

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
                // <img src={ appLogo } style={{ width: '2.2rem', height: 'auto', margin: 'auto', marginLeft: isMobile ? '.5rem' : '.5rem', marginTop: isMobile ? '.5rem' : '0.3rem' }} alt="logo" />
                <img src={ appLogo } style={{
                  width: '2.2rem',
                  height: 'auto',
                  margin: 'auto',
                  marginLeft: isMobile ? '-.5rem' : '.5rem',
                  marginTop: isMobile ? '-0.25rem' : '0.3rem'
                }} alt="logo" />
              )
              : (

                <FAIcon name={item.icon} style={{ color }} />
              )
          }
          <div style={{ color }} className="label">{item.name}</div>
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
