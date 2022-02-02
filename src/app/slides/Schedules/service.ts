import api from 'utils/api'
// FIREBASE
// import config from 'apps/schools/firebase.config'
// import FirebaseDevKit from 'util/firebase/devkit'
// const firebase = FirebaseDevKit(config)
// MISC
const appName = 'slides'
const resource = 'schedules'

export class Scheduleservice {
  constructor () {
    console.log(`${this.constructor.name} INIT`)
  }

  // #region FIREBASE
  // create = (data: any) => {
  //   console.log(`${this.constructor.name} CREATE`)
  //   const promise = firebase.FIRESTORE
  //     .collection(resource)
  //     .add(data)
  //     .then((docRef: any) => {
  //       console.log({ docRef })
  //     })
  //     .catch((error: any) => {
  //       console.log({ error })
  //     })
  //     .finally(() => {
  //     })

  //   return promise
  // }

  // getAll = () => {
  //   console.log(`${this.constructor.name} GET_ALL`)
  //   const promise = firebase.FIRESTORE
  //     .collection(resource)
  //     .get()
  //     .then((snapshot: any) => {
  //       const data: any[] = []
  //       snapshot.forEach((doc: any) => {
  //         data.push({
  //           id: doc.id,
  //           ...doc.data()
  //         })
  //       })
  //       console.log({ data })
  //       return data
  //     })
  //     .catch((error: any) => {
  //       return error
  //     })

  //   return promise
  // }
  // #endregion

    // #region CRUD
    // TODO: deprecate static functions
    static findSchedules = async ({ id, query }: any) => {
      return await api.GETResource({ appName, resource, id, query })
    }

    static createScreen = async (data: any) => {
      return await api.POSTResource({ appName, resource, data })
    }

    static updateScreen = async (id: string | number, data: any) => {
      return await api.PATCHResource({ appName, resource, id, data })
    }

    static deleteScreen = async (id: string | number) => {
      return await api.DELETEResource({ appName, resource, id })
    }
    // #endregion
}

export default Scheduleservice
