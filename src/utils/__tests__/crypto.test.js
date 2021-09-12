import { keys, getIdForCode, getCodeForId } from '../crypto'

describe('Crypto', () => {
  test('Has coins (23)', () => {
    expect(keys?.length).toBe(23)
  })

  test('getIdForCode(BTC): bitcoin', () => {
    expect(getIdForCode('BTC')).toBe('bitcoin')
    // expect(getIdForCode('ETC')).toBe('ethereum')
  })

  test('getCodeForId(bitcoin): BTC', () => {
    expect(getCodeForId('bitcoin')).toBe('BTC')
    // expect(getIdForCode('ethereum')).toBe('ETC')
  })
})
