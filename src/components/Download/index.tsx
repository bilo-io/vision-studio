import React from 'react'
import FAIcon from 'react-fontawesome'

const Download = ({ src, children, hasIcon, preview }: { src: any; children: any, hasIcon?: boolean, preview?: boolean }) => {
  return (
    <div>

      <a href={src} download={preview === false} target="_blank" rel="noreferrer">
        {hasIcon && <FAIcon name='download' />}
        {children}
      </a>
    </div>
  )
}

export default Download
