import { csvToJson } from '../convert'

describe('convert', () => {
  test('csvToJson error', () => {
    expect(csvToJson('INVALID_CSV')).toStrictEqual([])
  })

  test('csvToJson error', () => {
    expect(csvToJson(null)).toStrictEqual({
      error: 'csvToJson(csvString, delimiter = \',\') => arg \'csvString\' is undefined or null'
    })
  })
  test('csvToJson', () => {
    const input = `name,age,email,
john,25,john.doe@gmail.com`

    expect(csvToJson(input)).toStrictEqual([{
      '': undefined,
      age: '25',
      email: 'john.doe@gmail.com',
      name: 'john'
    }])
  })
})
