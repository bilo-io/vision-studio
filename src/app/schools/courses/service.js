// import config from 'app/schools/firebase.config'
// import FirebaseDevKit from 'utils/firebase/devkit'
// const firebase = FirebaseDevKit(config)
// MISC
const appName = 'schools'
const resource = 'courses'

export class SchoolsService {
  constructor () {
    console.log('SchoolsService initialised')
  }

  // createCourse = (data) => {
  //   const promise = firebase.FIRESTORE
  //     .collection(resource)
  //   // .doc(eventId)
  //   // .collection('reactions')
  //     .add(data)
  //     .then(docRef => {
  //       console.log({ docRef })
  //     })
  //     .catch(error => {
  //       console.log({ error })
  //     })
  //     .finally(() => {
  //       // fetchMessages()
  //     })
  //   return promise
  // }

  GET_ALL = () => {
    // const promise = firebase.FIRESTORE
    //   .collection(resource)
    //   .get()
    //   .then(snapshot => {
    //     const data = []
    //     snapshot.forEach(doc => {
    //       data.push({
    //         id: doc.id,
    //         ...doc.data()
    //       })
    //     })
    //     console.log({ data })
    //     return data
    //   })
    //   .catch(error => {
    //     return error
    //   })

    // return promise
  }
}

export default SchoolsService
