/* eslint-disable no-undef */
import saturate from '../saturate'

const users = [
  {
    name: 'Bilo',
    age: 30,
    email: 'bilo.lwabona@gmail.com'
  },
  {
    name: 'Henk',
    age: 31,
    email: 'vanjaarsveldhenk@gmail.com'
  },
  {
    name: 'Taariq',
    age: 35,
    email: 'tjma2001@gmail.com'
  }
]

const formattedUsers = {
  stats: {
    age: {
      n: 3,
      max: 35,
      min: 30,
      avg: 32,
      sum: 96,
      median: 31
    }
  },
  items: [
    {
      name: 'Bilo',
      age: 30,
      email: 'bilo.lwabona@gmail.com'
    },
    {
      name: 'Henk',
      age: 31,
      email: 'vanjaarsveldhenk@gmail.com'
    },
    {
      name: 'Taariq',
      age: 35,
      email: 'tjma2001@gmail.com'
    }
  ]
}

describe('Saturate', () => {
  test('should saturate withDistribution', () => {
    console.log(saturate.withDistribution({ items: users }, ['age']))
    expect(saturate.withDistribution({ items: users }, ['age'])).toMatchObject([
      [30, 31, 35]
    ])
  })

  test('should saturate withStats', () => {
    expect(
      saturate.withStats(
        {
          items: users
        },
        ['email'],
        ['age', 'name']
      )
    ).toMatchObject(formattedUsers)
  })

  test('should saturate withDimensions', () => {
    expect(
      saturate.withDimensions(users, ['email'], ['age', 'name'])
    ).toMatchObject({
      0: {
        age: 30,
        email: 'bilo.lwabona@gmail.com',
        name: 'Bilo'
      },
      1: {
        age: 31,
        email: 'vanjaarsveldhenk@gmail.com',
        name: 'Henk'
      },
      2: {
        name: 'Taariq',
        age: 35,
        email: 'tjma2001@gmail.com'
      }
    })
  })

  test('should saturate withAll', () => {
    expect(saturate.withAll(users, ['email'], ['age', 'name'])).toMatchObject({
      stats: {
        age: {
          avg: 32,
          max: 35,
          median: 31,
          min: 30,
          n: 3,
          sum: 96
        }
      }
    })
  })

  test('should not saturate undefined', () => {
    expect(saturate.withAll(undefined, [], [])).toMatchObject({
      data: undefined,
      error: 'saturate could not parse undefined'
    })
  })
})
