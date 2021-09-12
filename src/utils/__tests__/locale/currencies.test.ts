import { currencies, getCurrency } from '../../locale/currencies'

describe('locale', () => {
  describe('currencies', () => {
    test('has all the currencies', () => {
      expect(Object.keys(currencies).length).toBe(119)
    })

    test('getCurrency', () => {
      expect(getCurrency('zar')).toStrictEqual(
        {
          code: 'ZAR',
          decimal_digits: 2,
          name: 'South African Rand',
          name_plural: 'South African rand',
          rounding: 0,
          symbol: 'R',
          symbol_native: 'R'
        }
      )
    })
  })
})
