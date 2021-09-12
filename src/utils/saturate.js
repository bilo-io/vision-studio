import { stats } from './stats'

const getColumnData = (data, valueKeys) =>
  valueKeys.map((valueKey) => data.items.map((row) => row[valueKey]))

const withStats = (data, indexKeys, valueKeys) => {
  const columnStats = {}
  const columnData = getColumnData(data, valueKeys)

  columnData.forEach((c, cI) => {
    columnStats[valueKeys[cI]] = stats(c)
  })

  return {
    stats: columnStats,
    ...(data || {})
  }
}

const withDimensions = (data, indexKeys, valueKeys) => {
  const keys = (data?.items && Object.keys(data.items[0])) || []
  return {
    dimensions: {
      keys,
      indexKeys,
      valueKeys
    },
    ...(data || {})
  }
}

const withAll = (data) => {
  const isObject = data && typeof data === 'object'

  if (!isObject && !Array.isArray(data)) {
    return {
      data,
      error: 'saturate could not parse undefined'
    }
  }
  const keys = isObject && Object.keys(data[0])
  const valueKeys = keys.filter((key) => !isNaN(data[0][key]))
  const indexKeys = keys.filter((key) => !valueKeys.includes(key))

  console.log('withAll, ', { keys, indexKeys, valueKeys })

  return withStats(
    withDimensions({ items: data }, indexKeys, valueKeys),
    indexKeys,
    valueKeys
  )
}

// TODO: categorical ...
const withDistribution = (data, valueKeys) => {
  const columnData = getColumnData(data, valueKeys)
  return columnData
}

export default {
  withAll,
  withStats,
  withDimensions,
  withDistribution
}
