import React from 'react'

export function Card ({ children, className }: { children: any, className?: string }) {
  return (
    <div className={`card ${className}`}>
      proto-Card
      {children}
    </div>
  )
}

export default Card
