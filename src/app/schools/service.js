
import axios from 'axios'
const baseApiUrl = 'http://localhost:3020/api'
export const getCourses = () => {
  return axios({
    method: 'GET',
    url: `${baseApiUrl}/schools/courses`
  })
}

export default {
  getCourses
}
