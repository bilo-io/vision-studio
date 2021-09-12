import React from 'react'
import FAIcon from 'react-fontawesome'

export const getStatusIconName = (type: string) => {
  const iconMappings = {
    primary: 'triangle',
    success: 'check-circle',
    secondary: 'info-circle',
    warning: 'question-circle'
  }
  // @ts-ignore
  return iconMappings[type] || 'question-circle'
}

export const getStatusIcon = (type: any, props = {}) => {
  // @ts-ignore
  return <FAIcon name={ getStatusIconName(type) } { ...props } />
}

export default {
  icon: getStatusIcon,
  iconName: getStatusIconName
}
