import { getHeadlines, categories, countries } from '../news'
// @ts-ignore
// eslint-disable-next-line no-undef
jest.mock('axios')

describe('API.News', () => {
  test('categories', () => {
    expect(categories.length).toBe(7)
    expect(categories).toStrictEqual([
      'business',
      'entertainment',
      'general',
      'health',
      'science',
      'sports',
      'technology'
    ])
  })

  test('countries', () => {
    expect(countries.length).toBe(54)
  })

  xtest('getHeadlines(country, query)', () => {
    getHeadlines({ country: countries[0], category: categories[0], limit: 2, query: 'bitcoin' }).then((response) => {
      expect(response.data.length).toBe(2)
    })
  })

  xtest('getHeadlines()', () => {
    getHeadlines({
      limit: 2,
      query: 'bitcoin'
    }).then((response) => {
      expect(response.data.length).toBe(2)
    })
  })

  xtest('getHeadlines()', () => {
    getHeadlines({
      limit: 2
    }).then((response) => {
      expect(response.data.length).toBe(2)
    })
  })
})
