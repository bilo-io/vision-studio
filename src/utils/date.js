export const appendDateTime = (name) => {
  return `${name} ${new Date().toLocaleString()}`
}

export const offsetDateTime = (timeoffset) => {
  const date = new Date()
  date.setTime(date.getTime() + timeoffset * 60 * 60 * 1000)
  return date
}

// eslint-disable-next-line no-extend-native
Date.prototype.addHours = function (hours) {
  this.setTime(this.getTime() + (hours * 60 * 60 * 1000))
  return this
}

export const days = [
  'S',
  'M',
  'T',
  'W',
  'T',
  'F',
  'S'
]
export const getDayForIndex = (index) => {
  return days[index % days.length]
}

export const getDayOffset = (index) => {
  const now = new Date()
  const value = getDayForIndex(now.getDay() + index)
  // debugger
  return value
}
