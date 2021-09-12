import React from 'react'
import FAIcon from 'react-fontawesome'

const WidgetNotSupported = ({ type }: any) => (
  <div
    className=""
    style={{
      padding: '0.5rem',
      paddingTop: '2.5rem',
      width: 'calc(100% - 2rem)'
    }}
  >
    <div style={{ color: 'orange' }}>
      <FAIcon name="exclamation-circle" />
      &nbsp;&nbsp; Warning
    </div>
    <div className="divider horizontal" />
    <p style={{ fontSize: '0.9rem' }}>
      Widgets of type &nbsp;&nbsp;
      <code>
        <strong>{type}</strong>
      </code>
      &nbsp;&nbsp; are not currently supported.
    </p>
  </div>
)

export default WidgetNotSupported
