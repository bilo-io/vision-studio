/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { TabsComponent } from './TabsComponent'

export const Tabs = ({ keys, defaultTab, ...rest }: { keys: string[], defaultTab: string}) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab)
  const [activeTabIndex, setActiveTabIndex] = useState<number>(keys.findIndex(tab => tab === defaultTab))

  useEffect(() => {
    setActiveTab(defaultTab)
    // @ts-ignore
    const tabIndex = keys.length > 0 ? keys.findIndex((element: string) => element === defaultTab) : 0

    setActiveTabIndex(tabIndex)
  }, [[]])

  return (
    <div>
      <TabsComponent
        items={keys}
        activeIndex={activeTabIndex}
        onClickItem={(item: any, i: number) => {
          setActiveTab(item)
          setActiveTabIndex(i)
        }}
      />
      {/* @ts-ignore */}
      <div>{activeTab && rest[activeTab]}</div>
    </div>
  )
}

Tabs.defaultProps = {
  keys: []
}

export default Tabs
