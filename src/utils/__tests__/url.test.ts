/* eslint-disable no-undef */
describe('URL Tests', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {})
  })
  describe('hello world', () => {
    test(`: ${undefined}`, () => {
      expect(undefined).toBe(undefined)
    })
  })
})
