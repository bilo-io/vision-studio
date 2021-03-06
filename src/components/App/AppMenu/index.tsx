import React from 'react'
import FAIcon from 'react-fontawesome'
import { useHistory } from 'react-router'
import pkg from '../../../../package.json'
import hydraLogo from 'assets/vision-logo.png'

function AppMenu (
  {
    isOpen,
    isDark,
    onToggle
  }: {
    isOpen: boolean;
    isDark: boolean;
    onToggle: Function;
    }) {
  const history = useHistory()
  const goTo = (path: string) => () => {
    history.push(path)
    onToggle()
  }
  const noop = () => {}

  const dividerStyle = {
    width: '16rem',
    margin: 'auto',
    marginTop: '1rem',
    marginBottom: '1rem'
  }

  return (
    <div className={`app-menu ${isOpen ? '' : 'hidden'} ${isDark ? 'dark' : 'light'}`}>
      <div className="top">
        <div />
        <img className="im" src={hydraLogo} alt="hydra-logo" style={{ marginTop: '2rem', width: '3rem', height: '3rem' }} />
        <div />
      </div>
      <div className="content">

        <div className="title">{'Vision'}</div>

        <div className='divider horizontal' style={dividerStyle} />
        <div className='link' onClick={ goTo('/')}>
          <FAIcon name='home' />&nbsp;&nbsp;
            Home
        </div>
        <div className='divider horizontal' style={dividerStyle} />
        <div className='link' onClick={ goTo('/app/profile')}>
          <FAIcon name='user' />&nbsp;&nbsp;
            Account
        </div>

        <div className='divider horizontal' style={dividerStyle} />

        {[
          {
            name: 'Schools',
            path: '/schools/'
          },
          {
            name: 'Stocks',
            path: '/stocks'
          },
          {
            name: 'Slides',
            path: '/slides/slideshows'
          },
          {
            name: 'Sessions',
            path: '/sessions/new'
          },
          {
            name: 'Startups',
            path: '/startups/docs'
          }
        ].map((item) => (
          <>
            <div key={item?.path} className='link' onClick={goTo(item?.path)}>
              {item?.name}
            </div>
            <div className='divider horizontal' style={dividerStyle} />
          </>
        ))
        }

        <div className='link' onClick={ noop }>
          <FAIcon name='info-circle' />&nbsp;&nbsp;
            About
        </div>

        <div className='divider horizontal' style={dividerStyle} />

        <div className='link' onClick={ goTo('/auth/login') }>
          <FAIcon name='door-open' />&nbsp;&nbsp;
            Log Out
        </div>

        <div className="version">{pkg.version}</div>
      </div>

      <div style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}
        onClick={() => {
          onToggle()
        }}>
        <FAIcon name={'times'} />
      </div>
    </div>
  )
}

export default AppMenu
