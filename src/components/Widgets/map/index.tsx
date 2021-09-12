import React from 'react'
import { Card } from 'components'
// import Map from 'components/map'

export const WidgetMap = ({
  isEditable,
  data,
  onNext,
  duration
}: {
  isEditable?: boolean,
  data?: any,
  duration?: number,
  onNext?: Function
}) => {
  const { points } = data || { points: [] }
  return <div>
    <h1>WidgetMap</h1>
    <Card className='map-view'>
      {/* <Map layerStyle={'light'} points={points || []} /> */}
      <pre><code>{JSON.stringify(points, undefined, 2)}</code></pre>
    </Card>
  </div>
}

WidgetMap.config = {
  name: 'Map',
  type: 'widget:map',
  icon: 'image',
  props: [{
    name: 'url',
    type: 'text',
    defaultValue: ''
  }]
}

export default WidgetMap
