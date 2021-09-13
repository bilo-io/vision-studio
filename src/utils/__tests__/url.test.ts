/* eslint-disable no-undef */
import { fromUrlParams, getUrlId, toUrlParams } from '../url'
describe('URL Tests', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {})
  })

  describe('utils', () => {
    test('fromUrlParams', () => {
      expect(fromUrlParams('?hello=world&foo=bar')).toStrictEqual({
        hello: 'world',
        foo: 'bar'
      })
    })

    // eslint-disable-next-line quotes
    test(`fromUrlParams('') => empty string`, () => {
      expect(fromUrlParams('')).toStrictEqual({})
    })

    test('toUrlParams', () => {
      expect(toUrlParams({
        hello: 'world',
        foo: 'bar'
      })).toEqual('hello=world&foo=bar')
    })

    test('getUrlId', () => {
      expect(getUrlId('https://vision.io/slides/1234')).toStrictEqual('1234')
    })
  })
})
