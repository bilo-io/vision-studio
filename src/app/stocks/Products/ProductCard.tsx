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
import PriceChange from 'components/PriceChange'

type TabType = 'info' | 'chart' | 'trade' | null | undefined
type TradeType = 'buy' | 'sell' | null | undefined

const ProductCard = ({ product, isMobile, defaultTradeType, defaultTab }: { product: any; isMobile?: boolean, defaultTradeType?: TradeType, defaultTab?: TabType }) => {
  const [tab, setTab] = useState<TabType>(defaultTab)
  const [tradeType, setTradeType] = useState<TradeType>(defaultTradeType)
  const [loading, setLoading] = useState<boolean>(true)
  const [, setError] = useState<any>()
  const [coinData, setCoinData] = useState<any>(null)
  const [timeData, setTimedata] = useState<any[]>([])
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
    if (coinData === null) {
      fetchCoins(product?.id)
        // @ts-ignore
        .then((response: any) => {
          setCoinData(response?.data)
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
    fetchCoins(product?.id)
    // @ts-ignore
      .then((response: any) => {
        const data = response?.data?.market_data
        const timeframeEntries = [
          {
            name: '1D',
            percentage: data?.price_change_percentage_24h,
            value: data?.price_change_percentage_24h_in_currency
          },
          {
            name: '1M',
            percentage: data?.price_change_percentage_30d,
            value: data?.price_change_percentage_30d_in_currency
          },
          {
            name: '3M',
            percentage: data?.price_change_percentage_60d,
            value: data?.price_change_percentage_60d_in_currency
          },
          {
            name: '1Y',
            percentage: data?.price_change_percentage_1y,
            value: data?.price_change_percentage_1y_in_currency
          }
        ]
        console.log(timeframeEntries)
        setCoinData(response?.data)
        setTimedata(timeframeEntries)
      })
      .catch(error => {
        setError(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])
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
        <div className="flex-row" style={{ marginBottom: '.75rem', marginTop: '.25rem' }}>
          <img src={product?.icon} alt={product?.code} style={{ width: '1.5rem', height: '1.5rem' }}/>
          <div style={{ lineHeight: '1.5rem' }} className="flex-row space-between full-width">
            <div className="flex-row">
              <div style={{ marginRight: '.5rem' }} />
              <div>
                {product.name}
              </div>
            </div>
            <div>
              <FAIcon name="" />
            </div>

          </div>
        </div>
        <div className="divider horizontal" style={{ marginTop: '.25rem', marginBottom: '.5rem' }}/>
        {
          tab === 'info' && (
            <div style={{ marginTop: '1.6rem', marginBottom: '1.6rem' }}>
              <Download preview hasIcon src={product?.whitepaper || product?.whitepaperUrl}>
                Download Whitepaper
              </Download>
            </div>
          )
        }
        {/* Time PercentageChange */}
        {
          tab === 'chart' && (
            <div className="flex-row space-between" style={{ marginBottom: '.5rem' }}>
              {
                timeData.map((item) => (
                  <div key={item?.name} className="flex-col">
                    <div style={{ textAlign: 'center', fontWeight: 'bold', margin: '.5rem 0 .5rem 0', fontSize: '.75rem' }}>{item?.name}</div>
                    <PriceChange isStacked percentage={item?.percentage} size='sm'/>
                  </div>
                ))
              }

            </div>
          )
        }
        {
          tab === 'trade' && (
            <div style={{
              opacity: 0.5,
              marginLeft: '.5rem',
              margin: 'auto',
              width: 'fit-content',
              marginTop: '1.6rem',
              marginBottom: '1.6rem'
            }}>( 1 {product?.code} ≈ ${ withCommas(coinData?.market_data?.current_price?.usd || 0)})</div>
          )
        }
        {
          !tab && (
            <div style={{
              marginTop: '1.6rem',
              marginBottom: '1.6rem',
              textAlign: 'center'
            }}>
              Select a tab below
            </div>
          )
        }
        <div className="divider horizontal" style={{ marginTop: '.25rem', marginBottom: '.5rem' }}/>
        {/* TABS */}
        <div className='flex-row space-between' style={{ marginTop: '1rem', marginBottom: '.5rem' }}>
          <div className='flex-row pointer' onClick={() => setOrDeactivateTab('info')}>
            <FAIcon name='info-circle' style={{ marginRight: '.5rem', fontSize: '1rem' }} className='pointer'/>
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
            <div className='divider horizontal' style={{ marginTop: '.75rem' }}/>
          )}
        {/* ACTIVE TAB */}
        {
          tab === 'info' && (
            <div className="overflow-hidden justify">
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
            <div style={{ paddingBottom: '.5rem', marginTop: '1rem' }}>
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
