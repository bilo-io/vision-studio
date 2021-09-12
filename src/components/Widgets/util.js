import tiles from './tiles'
import config from './config'

export const getApp = (type) => {
  return tiles.filter(app => app.type === type).pop()
}
export const getAppIcon = (type) => (getApp(type) || { meta: {} }).meta.iconUrl

export const getAppConfig = (type) => {
  return config.filter(app => app?.type === type).pop()
}
