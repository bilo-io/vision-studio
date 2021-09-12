export const byField = (key) => (a, b) =>
  a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0

export default {
  byField
}
