export const stats = (
  data,
  options = {
    n: true,
    avg: true,
    min: true,
    max: true,
    sum: true,
    median: true,
    stdDev: false,
    variance: false,
    lowQuart: false,
    uppQuart: false
  }
) => {
  const isArray = Array.isArray(data)
  if (!isArray) {
    console.warn('STATS_ERR: data is not an Array:', { data })
    return undefined
  }
  if (isArray) {
    const is2DArray = data.length > 0 && Array.isArray(data[0])
    if (is2DArray) {
      // recursive call on each element here
      const subStats = data.map((frame, i) => stats(frame, options))

      const totalN = subStats.reduce((prev, curr, index) => curr.n + prev.n)
      // TODO: sort all of this out,
      return {
        n: totalN,
        median: 0,
        min: Math.min(...subStats.map((stat) => stat.min)),
        max: Math.max(...subStats.map((stat) => stat.max)),
        sum: subStats.reduce((prev, curr, index) => curr.sum + prev.sum)
      }
    } else {
      const n = data.length
      const sum = data.reduce((prev, curr, index) => curr + prev)
      return {
        n,
        max: Math.max(...data),
        min: Math.min(...data),
        avg: sum / n,
        sum,
        median: data[Math.floor(n / 2)]
      }
    }
  }
}

export default stats
