import React from 'react'

export function Button ({
  children,
  color,
  shape,
  className,
  style,
  onClick
}: {
    children: any,
    color?: string | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'white',
    shape?: string | 'solid' | 'hollow' | 'round' | 'big-round',
    className?: string,
    style?: any,
    onClick?: Function
}) {
  return (
    <button className={`${color} ${shape} ${className}`} style={style} onClick={() => onClick()}>
      { children }
    </button>
  )
}

export default Button
