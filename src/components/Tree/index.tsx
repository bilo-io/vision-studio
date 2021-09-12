import React from 'react'

export type TreeProps = {
  data: any
}

export const Tree = ({ data }: TreeProps) => {
  return (
    <div>
      Tree
      <pre>{JSON.stringify(data, undefined, 4)}</pre>
    </div>
  )
}

export default Tree
