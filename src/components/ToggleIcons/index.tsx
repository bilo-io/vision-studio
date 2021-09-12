/* eslint-disable react/no-deprecated */
import React, { useEffect, useState } from 'react'
import FAIcon from 'react-fontawesome'

export const ToggleIcons = ({
  isDefaultActive,
  items,
  onChange
}: {
  isDefaultActive: boolean,
  items: any[],
  onChange: Function
  }) => {
  // #region STATE
  const [state, setState] = useState<any>({

  })
  // #endregion

  // #region FUNCTIONS
  const toggleItem = (index: any) => () => {
    // const { items } = state
    setState(
      {
        items: [
          ...state?.items?.slice(0, index),
          {
            ...items[index],
            isActive: !state?.items?.[index]?.isActive
          },
          ...state?.items?.slice(index + 1)
        ]
      }
      // ,
      // TODO: useStateWithCallback
      // () => onChange(state?.items)
    )
  }
  // #endregion

  // #region LIFECYCLE
  useEffect(() => {
    setState({
      items: state?.items?.map((item: any) => ({
        ...item,
        isActive: isDefaultActive
      }))
    })
  }, [])
  // #endregion

  return (
    <div className={'flex-row'}>
      {state?.items?.map((item: any, i: number) => (
        <FAIcon
          key={i}
          style={{
            color: item.isActive ? '#00adee' : 'lightgrey',
            marginRight: '0.25rem',
            marginBottom: '0.25rem',
            cursor: 'pointer'
          }}
          name={item.icon}
          onClick={toggleItem(i)}
        />
      ))}
    </div>
  )
}

ToggleIcons.defaultProps = {
  isDefaultActive: true
}
export default ToggleIcons
