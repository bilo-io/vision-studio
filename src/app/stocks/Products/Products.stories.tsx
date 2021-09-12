import React from 'react'
import Products from '.'
import { withProvider } from '../../../../.storybook/utils/provider'

export default {
  title: 'Features/Products',
  component: Products,
  decorators: [withProvider]
}

export const ProductsStories = () => {
  return (
    <div>
      <Products />
    </div>
  )
}
