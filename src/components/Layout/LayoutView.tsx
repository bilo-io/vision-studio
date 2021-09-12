import React from 'react'
import SplitPane from 'react-split-pane'
// import 'styles/index.scss'

export const Layout = ({
  leftDiv,
  rightDiv,
  isLeftDark,
  isRightDark
}: {
  leftDiv: any,
  rightDiv: any,
  isLeftDark?:boolean,
  isRightDark?:boolean
}) => {
  return (
    <SplitPane
      split="vertical"
      defaultSize={300}
      minSize={54}
      maxSize={600}
      style={{
        position: 'relative',
        height: '100vh'
      }}
    >
      {leftDiv && (
        <div
          className={`layout-panel ${isLeftDark ? 'dark' : ''}`}
          style={{ color: '#888' }}
        >
          {leftDiv}
        </div>
      )}
      {rightDiv && (
        <div className={`layout-panel ${isRightDark ? 'dark' : ''}`}>
          {rightDiv}
        </div>
      )}
    </SplitPane>
  )
}

Layout.defaultProps = {
  isLeftDark: true,
  isRightDark: false
}

export default Layout
