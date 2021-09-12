/* eslint-disable no-undef */
import { fromUrlParams, toUrlParams } from '../url'
describe('URL Tests', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {})
  })

  describe('utils', () => {
    xtest('fromUrlParams', () => {
      expect(fromUrlParams('?hello=world&foo=bar')).toBe({
        hello: 'world',
        foo: 'bar'
      })
    })

    test('toUrlParams', () => {
      expect(toUrlParams({
        hello: 'world',
        foo: 'bar'
      })).toEqual('hello=world&foo=bar')
    })
  })
})
