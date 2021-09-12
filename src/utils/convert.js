const csvToJson = (csvString, delimiter = ',') => {
  if (!csvString) {
    return {
      error: 'csvToJson(csvString, delimiter = \',\') => arg \'csvString\' is undefined or null'
    }
  }
  const lines = csvString.split('\n')
  const columns = lines[0].split(delimiter)
  return lines.slice(1).map((line) => {
    // TODO:
    // - add dimensions, keys, etc.
    // - in a separate util, such that any raw csv can be converted to be imported
    const row = {}
    const rowEntries = line.split(delimiter)
    columns.forEach((key, entryIndex) => {
      row[key] = rowEntries[entryIndex]
    })
    return row
  })
}

export default {
  csvToJson
}
