import { randomMedia } from '../../mock/media'

describe('media', () => {
  describe('randomMedia', () => {
    test('returns random image', () => {
      expect(randomMedia()).toBe(null)
      expect(randomMedia('image').length).toBeGreaterThan(0)
    })
  })
})
