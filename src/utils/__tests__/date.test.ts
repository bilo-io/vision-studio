import { days, getDayForIndex, getDayOffset, offsetDateTime } from 'utils/date'

describe('date', () => {
  describe('daysOfTheWeek', () => {
    // eslint-disable-next-line quotes
    test(`['S', 'M', 'T', 'W', 'T', 'F', 'S']`, () => {
      expect(days).toStrictEqual([
        'S',
        'M',
        'T',
        'W',
        'T',
        'F',
        'S'
      ])
    })
  })

  describe('offsetDateTime', () => {
    xtest('can offset', () => {
      const timeoffset = 100
      const date = new Date()
      date.setTime(date.getTime() + timeoffset * 60 * 60 * 1000)
      expect(offsetDateTime(timeoffset)).toStrictEqual(date)
    })
  })

  describe('getDayForIndex', () => {
    test('0 is Sunday', () => {
      expect(getDayForIndex(0)).toBe('S')
    })
  })

  describe('getDayOffset', () => {
    xtest('offset by 3', () => {
      const now = new Date()
      const offset = 3
      expect(getDayOffset(offset)).toBe(getDayForIndex(now.getDay() + offset))
    })
  })
})
