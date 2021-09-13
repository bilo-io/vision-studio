import React from 'react'

export const Input = ({ children, className, color, ...rest }: any) => (
  <input
    className={`vision-input ${
      color !== undefined
        ? ' ' + color
        : ' '
    }${
      className !== undefined
        ? ' ' + className
        : ' '
    }`}
    { ...rest }
  />
)

export default Input
