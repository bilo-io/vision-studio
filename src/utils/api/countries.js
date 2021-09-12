import axios from 'axios'

export const getCountryDetails = async (countries) => {
  return await axios.get(`https://restcountries.eu/rest/v2/alpha?codes=${countries.join(';')}`)
}
