import React from 'react'
import Products from '.'
import { withAppBody, withProvider } from '../../../../.storybook/utils/provider'

export default {
  title: 'Features/Stocks/Products',
  component: Products,
  decorators: [withAppBody, withProvider]
}

export const ProductsStories = () => {
  return (
    <div>
      <Products />
    </div>
  )
}
