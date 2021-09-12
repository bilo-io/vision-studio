import { currencies } from '../../locale/currencies'

describe('locale', () => {
  describe('currencies', () => {
    test('has all the currencies', () => {
      expect(Object.keys(currencies).length).toBe(119)
    })
  })
})
