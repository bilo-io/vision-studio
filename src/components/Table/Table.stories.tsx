/* eslint-disable react/display-name */
import React, { useMemo } from 'react'
import Table from '.'
import { withAppBody, withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'Core/Table',
  component: Table,
  decorators: [withAppBody, withProvider]
}

export function TableStories () {
  const data = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@gmail.com',
      image: 'https://www.seekpng.com/png/detail/41-410093_circled-user-icon-user-profile-icon-png.png'
    },
    {
      firstName: 'Alice',
      lastName: 'Crypt',
      email: 'alice.crypt@gmail.com',
      image: 'https://female-media.femalemag.com.sg/source/2016/06/H110-750x500.jpg'
    }
  ]

  const columns = useMemo(
    () => [
      {
        accessor: 'image',
        Header: '',
        Cell: ({ value, row }: { value: any; row: any }) => {
          return (
            <div>
              <img src={value} style={{ width: '3rem', height: '3rem', borderRadius: '50%' }} />
            </div>
          )
        }
      },
      {
        accessor: 'firstName',
        Header: 'First name',
        Cell: ({ value, row }: { value: any; row: any }) => {
          return (
            <div>
              {value}
            </div>
          )
        }
      },
      {
        accessor: 'lastName',
        Header: 'Last name',
        Cell: ({ value, row }: { value: any; row: any }) => {
          return (
            <div>
              {value}
            </div>
          )
        }
      },
      {
        accessor: 'email',
        Header: 'Email address',
        Cell: ({ value }: { value: any; row: any }) => {
          return (
            <div>
              {value}
            </div>
          )
        }
      }

    ]
    , [data])
  return (
    <div>
      <Table
        data={data}
        columns={columns}
      />
    </div>
  )
}
