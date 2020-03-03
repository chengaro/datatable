export const baseUrl =
  'http://www.filltext.com/?id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'

export const tableFields = [
  { name: 'id', type: 'text', isRequired: true },
  { name: 'firstName', type: 'text', isRequired: true },
  { name: 'lastName', type: 'text', isRequired: true },
  { name: 'email', type: 'email', isRequired: true },
  { name: 'phone', type: 'text', isRequired: true }
]

export const primaryKey = 'email'

export const limit = 50

export const dynamicSort = (property, descending = false) => {
  let order = descending ? -1 : 1
  return function(a, b) {
    let result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0
    return result * order
  }
}

export const changeProperty = (obj, prop, value) => {
  const obj2 = { ...obj }
  obj2[prop] = value
  return obj2
}

export const objToArray = obj => {
  const result = []
  Object.entries(obj).forEach(([k, v]) => {
    if (typeof v !== 'object') {
      result.push({ key: k, value: v })
    } else {
      Object.entries(v).forEach(([_k, _v]) => {
        if (typeof _v !== 'object') {
          result.push({ key: _k, value: _v })
        }
      })
    }
  })
  return result
}

export const range = (start, end) => {
  return [...Array(end + 1 - start).keys()].map(el => el + start)
}
