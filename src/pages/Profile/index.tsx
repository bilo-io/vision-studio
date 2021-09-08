/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
// source
import { db } from 'utils/firebase'
import Accordion from 'components/Accordion'
import Async from 'components/Async'

function Profile () {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<any | null>(null)

  // #region FUNCTIONS
  const fetchData = async () => {
    const snapshot = await getDocs(collection(db(), 'profiles'))
    snapshot.forEach((profile: any) => {
      console.log(profile.id, profile.data())
    })
    setData(snapshot.docs?.[0]?.data?.())
    return data
  }
  // #endregion

  // #region LIFECYCLE
  useEffect(() => {
    // console.log(fetchData())
    fetchData()
      .then(data => console.log('SUCCESS: ', data?.docs?.length))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])
  // #endregion

  return (
    <div>
      <h3>Profile</h3>
      <Async isLoading={loading}>
        <div className="flex-row">
          <h2>{data?.username}</h2>
          <div>{data?.subscription?.name}</div>
        </div>

        <h4>{data?.email}</h4>

        <br />

        <div>Apps</div>

        <br />

        <div className="flex-row">
          {data?.apps?.map((app: string) => (
            <div style={{ marginRight: '1rem' }} key={app}>{app}</div>
          ))}
        </div>
      </Async>

      <Accordion title={'Bank Details'} isOpenDefault>
        <Async isLoading={loading}>
          {data?.bankDetails && data?.bankDetails?.map((item: any) => (
            <div key={item?.accountNumber}>
              {item.alias}
            </div>
          ))}
        </Async>
      </Accordion>

      <Accordion title={'Crypto wallets'} isOpenDefault>
        <Async isLoading={loading}>
          {data?.wallets && Object.keys(data?.wallets).map((key: string) => (
            <div key={key}>
              {data?.wallets?.[key]?.alias}
            </div>
          ))}
        </Async>
      </Accordion>
    </div>
  )
}

export default Profile
