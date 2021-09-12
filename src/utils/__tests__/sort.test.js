/* eslint-disable no-undef */
import { byField } from '../sort'

const users = [
  {
    name: 'Filipa',
    age: 23,
    email: 'filip.ah@gmail.com'
  }, {
    name: 'Henk',
    age: 31,
    email: 'vanjaarsveldhenk@gmail.com'
  }, {
    name: 'Adam',
    age: 31,
    email: 'bilo.lwabona@gmail.com'
  }, {
    name: 'Adam',
    age: 47,
    email: 'ze.adam@gmail.com'
  }, {
    name: 'Taariq',
    age: 35,
    email: 'tjma2001@gmail.com'
  }, {
    name: 'Bilo',
    age: 30,
    email: 'bilo.lwabona@gmail.com'
  }
]

describe('sort.byField', () => {
  it('sorted by Age', () => {
    // TODO: fix this test and the sort.byField() util
    expect(users.sort(byField('age'))).toMatchObject([
      {
        name: 'Filipa',
        age: 23,
        email: 'filip.ah@gmail.com'
      }, {
        name: 'Bilo',
        age: 30,
        email: 'bilo.lwabona@gmail.com'
      }, {
        name: 'Henk',
        age: 31,
        email: 'vanjaarsveldhenk@gmail.com'
      }, {
        name: 'Adam',
        age: 31,
        email: 'bilo.lwabona@gmail.com'
      }, {
        name: 'Taariq',
        age: 35,
        email: 'tjma2001@gmail.com'
      }, {
        name: 'Adam',
        age: 47,
        email: 'ze.adam@gmail.com'
      }
    ])
  })

  it('sorted by Email', () => {
    console.log(users.sort(byField('email')))
    expect(users.sort(byField('email'))).toMatchObject([
      {
        name: 'Bilo',
        age: 30,
        email: 'bilo.lwabona@gmail.com'
      }, {
        name: 'Adam',
        age: 31,
        email: 'bilo.lwabona@gmail.com'
      }, {
        name: 'Filipa',
        age: 23,
        email: 'filip.ah@gmail.com'
      }, {
        name: 'Taariq',
        age: 35,
        email: 'tjma2001@gmail.com'
      }, {
        name: 'Henk',
        age: 31,
        email: 'vanjaarsveldhenk@gmail.com'
      }, {
        name: 'Adam',
        age: 47,
        email: 'ze.adam@gmail.com'
      }
    ])
  })

  it('sorted by Name', () => {
    expect(users.sort(byField('name'))).toMatchObject([
      {
        name: 'Adam',
        age: 31,
        email: 'bilo.lwabona@gmail.com'
      }, {
        name: 'Adam',
        age: 47,
        email: 'ze.adam@gmail.com'
      }, {
        name: 'Bilo',
        age: 30,
        email: 'bilo.lwabona@gmail.com'
      }, {
        name: 'Filipa',
        age: 23,
        email: 'filip.ah@gmail.com'
      }, {
        name: 'Henk',
        age: 31,
        email: 'vanjaarsveldhenk@gmail.com'
      }, {
        name: 'Taariq',
        age: 35,
        email: 'tjma2001@gmail.com'
      }
    ])
  })
})
