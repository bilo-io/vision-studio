import { coins, keys } from '../assets/crypto'
export * from '../assets/crypto'

export const getIdForCode = (code: string) => {
  // @ts-ignore
  const result = coins?.[code]?.id
  console.log('getIdForCode', { input: code, output: result })
  return result
}

export const getCodeForId = (id: string) => {
  // @ts-ignore
  const result = keys.find((key) => coins?.[key]?.id === id)
  console.log('getCodeForId', { input: id, output: result })
  return result
}
