import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

import firebaseConfig from '../../config'

firebase.initializeApp(firebaseConfig)

export const AUTH = firebase.auth()
export const DB = firebase.database()
export const STORAGE = firebase.storage()
export const REF = (endpoint, id = undefined) => {
  console.log('firebase.REF: ', endpoint, id)
  return DB.ref(`/${endpoint}`)
}
export const watch = (path, options = {
  onChange: (snapshot) => console.log('firebase.watch: onChange(snapshot) UNDEFINED', snapshot),
  onAddItem: (snapshot) => console.log('firebase.watch: onItemAdd(snapshot) UNDEFINED', snapshot),
  onChangeItem: (snapshot) => console.log('firebase.watch: onItemChange(snapshot) UNDEFINED', snapshot),
  onDeleteItem: (snapshot) => console.log('firebase.watch: onItemDelete(snapshot) UNDEFINED', snapshot)
}) => {
  const { onChange, onAddItem, onChangeItem, onDeleteItem } = options

  if (onChange) {
    REF(path).on('value', snapshot => {
      onChange(snapshot)
    })
  }
  if (onChangeItem) {
    REF(path).on('value', snapshot => {
      onChangeItem(snapshot)
    })
  }
  if (onAddItem) {
    REF(path).on('value', snapshot => {
      onAddItem(snapshot)
    })
  }
  if (onDeleteItem) {
    REF(path).on('child_removed', snapshot => {
      onDeleteItem(snapshot)
    })
  }
}
// NOTE: creates a new item under the given resource, (with a unique id)
export const create = (path, data) => {
  REF(path).set(data)
}
export const updateItem = (path, data) => {
  DB.ref().update({ [path]: data })
}
export const get = (path, callback = (snapshot) => {
  console.log('firebase.get(snapshot) UNDEFINED', snapshot)
}) => {
  REF(path)
    .once('value')
    .then(snapshot => {
      callback(snapshot)
    })
}
export const createWithId = (path, id, data) => {
  REF(path)
    .child(id)
    .set(data)
}
// AUTH
// - login
export const emailAuthLogin = (email, password) => {
  return AUTH.signInWithEmailAndPassword(email, password)
}
// - register
export const emailAuthRegister = (email, password) => {
  return AUTH.createUserWithEmailAndPassword(email, password)
}
// - logout
export const logOut = () => AUTH.signOut()

export const clean = (obj) => {
  for (const propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName]
    }
  }
}

export default {
  // firebase
  AUTH,
  DB,
  REF,
  // custom functions
  create,
  updateItem,
  get,
  watch,
  //
  logOut,
  signOut: logOut,
  emailAuthLogin,
  login: emailAuthLogin,
  emailAuthRegister,
  register: emailAuthRegister
}

// create('my/test', {     hello: 'world' })
createWithId('my/test', 'testing', { hello: 'world' })
