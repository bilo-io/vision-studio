/* eslint-disable no-unused-vars */
import firebaseConfig from '../firebase.config'

import { initializeApp } from 'firebase/app'
// AUTH
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore'

export const app = initializeApp(firebaseConfig)

export const db = () => getFirestore()
export const auth = () => getAuth()

export const get = async (query: string) => {
  const snapshot = await getDocs(collection(db(), query))
}

export const set = async (query, data) => {
  const snapshot = await addDoc(collection(db(), query, data))
}

export const loginWith = (OAUTHProvider, successCallback, errorCallback) => {
  let provider
  switch (OAUTHProvider) {
  case 'google':
    provider = new GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
    signInWithPopup(auth(), provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        const user = result.user

        // console.log('firebase.login.SUCCESS', { user, credential, token })
        successCallback({ user, credential, token })
      })
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error)
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.email

        // console.log('firebase.login.ERROR', { error, credential })
        errorCallback({ error, credential })
      })
    // consider language for auth
  }
}

// import * as firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/database'
// import 'firebase/storage'
// import 'firebase/firestore'

// firebase.initializeApp(firebaseConfig)

// // export const AUTH = firebase?.auth()
// export const DB = firebase?.database()
// export const STORE = firebase?.firestore()
// export const STORAGE = firebase?.storage()
// export const REF = (endpoint, id = undefined) => {
//   console.log('firebase.REF: ', endpoint, id)
//   return DB.ref(`/${endpoint}`)
// }
// export const watch = (path, options = {
//   onChange: (snapshot) => console.log('firebase.watch: onChange(snapshot) UNDEFINED', snapshot),
//   onAddItem: (snapshot) => console.log('firebase.watch: onItemAdd(snapshot) UNDEFINED', snapshot),
//   onChangeItem: (snapshot) => console.log('firebase.watch: onItemChange(snapshot) UNDEFINED', snapshot),
//   onDeleteItem: (snapshot) => console.log('firebase.watch: onItemDelete(snapshot) UNDEFINED', snapshot)
// }) => {
//   const { onChange, onAddItem, onChangeItem, onDeleteItem } = options

//   if (onChange) {
//     REF(path).on('value', snapshot => {
//       onChange(snapshot)
//     })
//   }
//   if (onChangeItem) {
//     REF(path).on('value', snapshot => {
//       onChangeItem(snapshot)
//     })
//   }
//   if (onAddItem) {
//     REF(path).on('value', snapshot => {
//       onAddItem(snapshot)
//     })
//   }
//   if (onDeleteItem) {
//     REF(path).on('child_removed', snapshot => {
//       onDeleteItem(snapshot)
//     })
//   }
// }
// // NOTE: creates a new item under the given resource, (with a unique id)
// export const create = (path, data) => {
//   REF(path).set(data)
// }
// export const updateItem = (path, data) => {
//   DB.ref().update({ [path]: data })
// }
// export const get = (path, callback = (snapshot) => {
//   console.log('firebase.get(snapshot) UNDEFINED', snapshot)
// }) => {
//   REF(path)
//     .once('value')
//     .then(snapshot => {
//       callback(snapshot)
//     })
// }
// export const createWithId = (path, id, data) => {
//   REF(path)
//     .child(id)
//     .set(data)
// }
// // AUTH
// // - login
// // export const emailAuthLogin = (email, password) => {
// //   return AUTH.signInWithEmailAndPassword(email, password)
// // }
// // - register
// // export const emailAuthRegister = (email, password) => {
// //   return AUTH.createUserWithEmailAndPassword(email, password)
// // }
// // - logout
// // export const logOut = () => AUTH.signOut()

// export const clean = (obj) => {
//   for (const propName in obj) {
//     if (obj[propName] === null || obj[propName] === undefined) {
//       delete obj[propName]
//     }
//   }
// }

// export default {
//   // firebase
//   // AUTH,
//   DB,
//   STORE,
//   REF,
//   // custom functions
//   create,
//   updateItem,
//   get,
//   watch
//   //
//   // logOut,
//   // signOut: logOut,
//   // emailAuthLogin,
//   // login: emailAuthLogin,
//   // emailAuthRegister,
//   // register: emailAuthRegister
// }

// // create('my/test', {     hello: 'world' })
// createWithId('my/test', 'testing', { hello: 'world' })
