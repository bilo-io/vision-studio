/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import FAIcon from 'react-fontawesome'
import Download from 'components/Download'
import LineChart from 'components/Charts/LineChart'
import { fetchChartData, fetchCoins } from 'services/coingecko'
// import { currency, language } from 'utils/locale'
import coins, { getCodeForId, getIdForCode } from 'assets/crypto'
import Async from 'components/Async'
import { withCommas } from 'utils/format-number'

type TabType = 'info' | 'chart' | 'trade' | null | undefined
type TradeType = 'buy' | 'sell' | null | undefined

const ProductCard = ({ product, isMobile, defaultTradeType, defaultTab }: { product: any; isMobile?: boolean, defaultTradeType?: TradeType, defaultTab?: TabType }) => {
  const [tab, setTab] = useState<TabType>(defaultTab)
  const [tradeType, setTradeType] = useState<TradeType>(defaultTradeType)
  const [loading, setLoading] = useState<boolean>(true)
  const [, setError] = useState<any>()
  const [coinData, setCoinData] = useState<any>(null)
  const [state, setState] = useState<any>({
    currency: 'usd',
    period: {
      days: 7,
      label: 'W'
    },
    chart: []
  })

  // #region FUNCTIONS
  const setOrDeactivateTab = (value: TabType) => {
    setTab(tab === value ? null : value)

    // debugger
    if (value === 'trade' && coinData === null) {
      console.log('here')
      fetchCoins(product?.id)
        // @ts-ignore
        .then((response: any) => {
          setCoinData(response?.data)
          // console.log(here)
          console.log(response?.data?.market_data, response?.data?.market_data?.current_price?.usd)
        })
        .catch(error => {
          setError(error)
        })
        .finally(() => {
          setLoading(false)
        })
    }
  }

  const fetchChart = (period: any) => {
    // setLoading(true);
    setState((prevState: any) => ({
      ...prevState,
      period
    }))

    fetchChartData({ id: product?.id, currency: state?.currency, days: period?.days })
      .then((response) => {
        setState((prevState: any) => ({
          ...prevState,
          chart: response.data?.prices
        }))
      })
      .catch(error => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  const generateSeries = (data: any, key: string, i: number) => {
    return {
      data,
      name: key,
      type: 'area',
      // @ts-ignore
      color: coins?.[key]?.color,
      fillColor: {
        linearGradient: [0, 0, 0, 300],
        stops: [
          // @ts-ignore
          [0, coins?.[key]?.color],
          [1, 'rgba(0,0,0,0)']
        ]
      }
    }
  }
  // #endregion

  // #region LIFECYCLE
  useEffect(() => {
    if (tab === 'chart') {
      fetchChart(state?.period)
    }
  }, [state?.period, tab])
  // #endregion
  return (
    <div>
      <div className={`product-card ${isMobile ? 'mobile' : 'desktop'}`} style={{ opacity: tab === null ? 0.7 : 1 }}>
        {/* </div> style={{ background: `linear-gradient(to left, ${product?.color} 10%, #202020 100%)`}}> */}
        <div className="flex-row">
          <img src={product?.icon} alt={product?.code} style={{ width: '1.5rem', height: '1.5rem' }}/>
          <div style={{ lineHeight: '1.5rem' }} className="flex-row space-between full-width">
            <div className="flex-row">
              <div style={{ marginRight: '.5rem' }} />
              <div>
                {product.name}
              </div>
            </div>

            <Download preview hasIcon iconRight src={product?.whitepaper || product?.whitepaperUrl}>
            Paper
            </Download>
          </div>
        </div>
        {/* TABS */}
        <div className='flex-row space-between' style={{ marginTop: '1rem' }}>
          <div className='flex-row pointer' onClick={() => setOrDeactivateTab('info')}>
            <FAIcon name='info-circle' style={{ marginRight: '.5rem', fontSize: '1.5rem' }} className='pointer'/>
            <div className='pointer'>Info</div>
          </div>
          <div className='flex-row pointer' onClick={() => setOrDeactivateTab('chart')}>
            <FAIcon name='chart-line' className='pointer'/>
          </div>
          <div className='flex-row pointer' onClick={() => setOrDeactivateTab('trade')} >
            <div className='pointer'>Trade</div>
            <FAIcon name='exchange-alt' style={{ marginLeft: '.5rem' }} className='pointer'/>
          </div>
        </div>
        {
          !!tab && (
            <>
              <br />
              <div className='divider horizontal' style={{ marginBottom: '.5rem' }}/>
            </>
          )}
        {/* ACTIVE TAB */}
        {
          tab === 'info' && (
            <div className="overflow-hidden">
              <p>{product?.summary}</p>
            </div>
          )}
        {
          tab === 'chart' && (
            <div>
              <Async isLoading={loading}>
                <LineChart
                  title=""
                  data={state?.chart}
                  series={[generateSeries(state?.chart || [], getCodeForId(product?.id), 0)]}
                  period={state?.period}
                  onChangeRange={ (period: any) =>
                    fetchChart({ id: product?.id, currency: state?.currency, days: period?.days })
                  }
                />
              </Async>
            </div>
          )}
        {
          tab === 'trade' && (
            <div style={{ paddingBottom: '.5rem' }}>
              <div style={{
                opacity: 0.5,
                marginLeft: '.5rem',
                margin: 'auto',
                width: 'fit-content',
                marginBottom: '.5rem'
              }}>( 1 {product?.code} ≈ ${ withCommas(coinData?.market_data?.current_price?.usd || 0)})</div>
              {
                <div className="trade-types">
                  <div
                    onClick={() => setTradeType('buy')}
                    className={`pointer item ${tradeType === 'buy' ? 'active' : ''}`}>
                      Buy
                  </div>
                  <div
                    onClick={() => setTradeType('sell')}
                    className={`pointer item ${tradeType === 'sell' ? 'active' : ''}`}>
                      Sell
                  </div>
                </div>
              }
              {
                tradeType !== null && (
                  <>
                    <div className="text-center" style={{ marginTop: '.5rem', marginBottom: '.25rem' }}>
                      {tradeType === 'buy' ? 'using' : 'for'}
                    </div>
                    <div className="trade-types flex-row space-between">
                      <div className="item active pointer" style={{ marginRight: '.5rem' }}>USD</div>
                      <input className="trade-input" type="number" placeholder="0.00" />
                    </div>
                  </>
                )
              }
            </div>
          )}
      </div>
    </div>
  )
}

ProductCard.defaultProps = {
  defaultTradeType: null,
  defaultTab: null
}

export default ProductCard
