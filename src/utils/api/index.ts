import axios from 'axios'
import env from 'utils/env'

// TODO: header to contain workspace & user details

console.log(
  'utils/api',
  { apiURL: `${env.apiUrl.slides}` }
)

type ICRUDAction = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

const CrudAction = async (method: ICRUDAction, url: string, data?: any) => {
  try {
    return await axios({
      url,
      method,
      data
    })
  } catch (error) {
    console.warn(`ERROR: ${error}`)
  }
}

export const GETResource = async ({ appName, resource, id, query }: any) => {
  return await CrudAction('GET', `${env.apiUrl[appName]}/${appName}/${resource}`)
}

export const POSTResource = async ({ appName, resource, data }: any) => {
  return await CrudAction('POST', `${env.apiUrl[appName]}/${appName}/${resource}`, data)
}

export const PATCHResource = async ({ appName, resource, id, data }: any) => {
  return await CrudAction('PATCH', `${env.apiUrl[appName]}/${appName}/${resource}/${id}`, data)
}

export const DELETEResource = async ({ appName, resource, id }: any) => {
  return await CrudAction('DELETE', `${env.apiUrl[appName]}/${appName}/${resource}/${id}`)
}

export const handleError = (addToast: Function) => (error: any) => {
  addToast({
    type: 'error',
    message: error
  })
}

export default {
  POSTResource,
  PATCHResource,
  GETResource,
  DELETEResource,
  handleError
}
