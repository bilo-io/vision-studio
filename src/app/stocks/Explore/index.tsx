import Async from 'components/App/Async'
import React, { useState, useEffect } from 'react'
import Accordion from 'components/Accordion'

function Explore () {
  const [loading] = useState<boolean>(true)

  // #region FUNCTIONS
  // #endregion

  // #region LIFECYCLE
  useEffect(() => {

  }, [])
  // #endregion

  return (
    <div>
      <Accordion title={'Coins'} isOpenDefault>
        <Async isLoading={loading}>
          Coins
        </Async>
      </Accordion>
      <Accordion title={'What are crypto currencies'} isOpenDefault>
        <Async isLoading={loading}>
          What
        </Async>
      </Accordion>
    </div>
  )
}

export default Explore
