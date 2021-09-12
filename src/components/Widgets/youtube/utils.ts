import { fromUrlParams } from 'utils/url'

export default (url: string) => {
  const params:any = fromUrlParams(url.split('?').pop())
  return params.v
}
