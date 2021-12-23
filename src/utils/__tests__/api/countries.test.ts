import { getCountryDetails } from '../../api/countries'

describe('api-countries', () => {
  xtest('countries', async () => {
    const details = await getCountryDetails(['de;usa;gb'])

    // debugger
    expect(details.data.length).toBe(3)
  })
})
