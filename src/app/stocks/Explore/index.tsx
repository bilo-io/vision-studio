import Async from 'components/Async'
import React, { useState, useEffect } from 'react'

import { useHistory } from 'react-router'
import { fetchCoins } from 'services/coingecko'
import { CoinCard } from 'components/Cards/CoinCard'
import { currency } from 'utils/locale'
import DEV from 'components/DEV'
import _ from 'lodash'

function Explore () {
  const history = useHistory()
  const [coins, setCoins] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [, setError] = useState<any>(null)
  const [filter, setFilter] = useState<string>('')
  const [filteredCoins, setFilteredCoins] = useState<any[]>([])

  // #region FUNCTIONS
  const filterCoins = (event: any) => {
    const { value } = event.target
    setFilter(value)
    setFilteredCoins(value.length === 0 ? coins : coins.filter((coin) => coin.name.toLowerCase().includes(value.toLowerCase()) || coin.id.includes(value.toLowerCase())))
  }
  // #endregion

  // #region LIFECYCLE
  useEffect(() => {
    setLoading(true)
    fetchCoins().then((response:any) => {
      setCoins(response?.data)
      setFilteredCoins(response?.data)
    })
      .catch(error => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
  // #endregion

  return (
    <div>
      <Async isLoading={loading}>
        <div className="bg-blur floating-top padded card">
          <input
            type={'text'}
            value={filter}
            onChange={filterCoins}
            style={{
              width: 'calc(100% - 2rem)',
              margin: '0.5rem',
              padding: '0.5rem',
              borderRadius: '1rem',
              backgroundColor: '#FFFFFF33!important'
            }}
          />
        </div>

        <div style={{ marginTop: '6rem' }} />
        {
          filteredCoins.map((coin) => (
            <>
              <CoinCard
                key={coin.id}
                item={coin}
                currency={currency}
                onClick={(coin: any) => history.push(`/explore/${coin?.id}`)}
              />

              <DEV
                success={_.pick(coin, [
                  'id',
                  'name',
                  'symbol',
                  'market_data.market_cap_rank',
                  'market_data.price_change_24h',
                  'market_data.price_change_percentage_24h',
                  'market_data.price_change_percentage_7d',
                  'market_data.price_change_percentage_14d',
                  'market_data.price_change_percentage_30d',
                  'market_data.price_change_percentage_60d',
                  'market_data.price_change_percentage_200d',
                  'market_data.price_change_percentage_1y',
                  'market_data.market_cap_change_24h',
                  'market_data.market_cap_change_percentage_24h'])
                } />
            </>
          ))
        }
      </Async>
    </div>
  )
}

export default Explore
