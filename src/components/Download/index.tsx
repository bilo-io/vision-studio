import React from 'react'
import FAIcon from 'react-fontawesome'

const Download = ({ src, children, hasIcon, iconRight, preview }: { src: any; children: any, hasIcon?: boolean, iconRight?: boolean, preview?: boolean }) => {
  return (
    <div>

      <a href={src} download={preview === false} target="_blank" rel="noreferrer">
        {hasIcon && !iconRight && <FAIcon name='download' style={{ marginRight: '.5rem' }}/>}
        {children}
        {hasIcon && iconRight && <FAIcon name='download' style={{ marginLeft: '.5rem' }}/>}
      </a>
    </div>
  )
}

export default Download
