/* eslint-disable no-undef */
import stats from '../stats'

const data1D = [30, 60, 40, 70, 50]

const data2D = [
  [30, 60, 40, 70, 50],
  [1, 30, 60, 40, 111, 230]
]

describe('input data in incorrect shape', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {})
  })
  describe('type and null checks', () => {
    test(`stats with input: ${undefined}`, () => {
      expect(stats(undefined)).toBe(undefined)
    })
    test(`stats with input: ${1}`, () => {
      expect(stats(1)).toBe(undefined)
    })
    test(`stats with input: boolean ${true}`, () => {
      expect(stats(true)).toBe(undefined)
    })
    test(`stats with input: boolean ${false}`, () => {
      expect(stats(false)).toBe(undefined)
    })
    test(`stats with input: boolean ${true}`, () => {
      expect(stats('statsStringAsArgument')).toBe(undefined)
    })
  })
})
describe('stats with 1D data', () => {
  test(`stats.max of ${data1D.toString()}`, () => {
    expect(stats(data1D).max).toBe(70)
  })
  test(`stats.median of ${data1D.toString()}`, () => {
    expect(stats(data1D).median).toBe(40)
  })
})

describe('stats with 2D data', () => {
  test(`stats of ${data2D.toString()}`, () => {
    expect(stats(data2D)).toMatchObject({
      max: 230,
      min: 1,
      median: 0,
      n: 11,
      sum: 722
    })
  })
})
