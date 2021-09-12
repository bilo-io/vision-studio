import { alphaNumeric } from '../random'

describe('random', () => {
  describe('alphaNumeric', () => {
    test('has 6 digits', () => {
      expect(alphaNumeric(6).length).toEqual(6)
    })
  })
})
