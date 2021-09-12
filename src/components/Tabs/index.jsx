/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { TabsComponent } from './TabsComponent'

export const Tabs = ({ keys, defaultTab, ...rest }) => {
  const [activeTab, setActiveTab] = useState(defaultTab)
  const [activeTabIndex, setActiveTabIndex] = useState(keys.findIndex(tab => tab === defaultTab))

  useEffect(() => {
    setActiveTab(defaultTab)
    setActiveTabIndex(keys?.findIndex(defaultTab) || 0)
  }, [[]])

  return (
    <div>
      <TabsComponent
        items={keys}
        activeIndex={activeTabIndex}
        onClickItem={(item, i) => {
          setActiveTab(item)
          setActiveTabIndex(i)
        }}
      />
      <div>{activeTab && rest[activeTab]}</div>
    </div>
  )
}

Tabs.defaultProps = {
  keys: []
}

export default Tabs
