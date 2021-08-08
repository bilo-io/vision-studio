/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import FAIcon from 'react-fontawesome'
import { LineChart } from 'components/Charts/LineChart'
import { fetchChartData, fetchCoins } from 'services/coingecko'
import Async from 'components/Async'
import Accordion from 'components/Accordion'
import Table from 'components/Table'
import coins, { keys, getCodeForId } from 'assets/crypto'
// import { colors } from 'components/Charts/utils/colors'
import Header from 'components/Table/Header'
import PriceChange from 'components/PriceChange'
import useWindowSize from 'hooks/use-window-size'

function Stats () {
  // #region STATE
  // eslint-disable-next-line no-unused-vars
  const location = useLocation()
  const { id } = useParams()
  const [error, setError] = useState<any>(null)
  const [activeKeys, setActiveKeys] = useState<string[]>(['DOGE', 'TRX'])

  const windowSize = useWindowSize()
  const isMobile = windowSize?.width && windowSize?.width < 480

  const [series, setSeries] = useState<any>({
    prices: {},
    totalVolume: {},
    marketCap: {}
  })
  const [searchState] = useState<any>({
    orderType: 'all',
    order: 'desc',
    orderyColumn: 'coin'
  })
  const [state, setState] = useState<any>({
    currency: 'usd',
    viewType: 'tile',
    isLoading: {
      ipAddress: true,
      countryForIP: true,
      cryptoInfo: true,
      cryptoIndex: true,
      chartData: true,
      coins: true
    },
    data: {},
    charts: {},
    info: {},
    period: {
      days: 7,
      label: 'W'
    }
  })
  // #endregion

  // #region FUNCTIONS
  const handleError = (err: any) => setError(err)
  const addCoinToChart = (key: string) => {
    // @ts-ignore
    const currentCoin = coins[key]

    fetchCoins(currentCoin.id)
      .then(response => {
        setState((prevState: any) => ({
          ...prevState,
          info: {
            ...prevState.info,
            [key]: response.data
          }
        }))
      })
    fetchChartData({ id: currentCoin?.id, currency: state?.currency, days: state?.period?.days })
      .then((response) => {
        const apiData = response.data

        setState((prevState: any) => ({
          ...prevState,
          charts: {
            ...prevState.charts,
            [key]: apiData
          }
        }))
      })
      .catch(handleError)
  }

  const fetchChartDataRoutine = (currency = 'usd', period = { label: 'W', days: 7 }, coins = [getCodeForId(id)]) => {
    const { charts } = state
    setState((prevState: any) => ({
      ...prevState,
      period
    }))

    const data = coins || Object.keys(charts)

    data.forEach(coin => {
      fetchCoins(coin)
        .then(response => {
          setState((prevState: any) => ({
            ...prevState,
            info: {
              ...prevState.info,
              [coin]: response
            }
          }))
        })
      fetchChartData({ id: coin, currency: 'usd', days: period.days })
        .then(response => {
          setState({
            charts: {
              ...state.charts,
              [coin]: response
            }
          })
        })
        .finally(() => {
          setState({
            isLoading: {
              ...state.isLoading,
              chartData: false
            }
          })
        })
    })
  }

  const handleFetchChartData = (period: any) =>
    fetchChartDataRoutine(state?.currency, state?.period)

  // const keysToUrl = (keys: string[]) => {
  //   const newLocation = `/stats?coins=${keys.join(',')}`
  //   history.push({ newLocation })
  // }

  // eslint-disable-next-line no-unused-vars
  const keysFromUrl = () => {
    const queryString = location?.search?.split?.('?')?.[1]
    const coins = queryString?.split?.('&')?.[0]?.split('=')[1]?.split(',')
    console.log(coins)
    // setActiveKeys(coins)
    // fetchChartDataRoutine(state?.currency, state?.period, coins)
  }

  const removeCoinFromChart = (key: string) => {
    setActiveKeys(activeKeys.filter(current => current !== key))
    const charts = state?.charts
    const info = state?.info

    delete charts[key]
    delete info[key]

    setState((prevState: any) => ({
      ...prevState,
      charts,
      info
    }))
  }

  const toggleKey = (key: string) => {
    if (!activeKeys.includes(key)) {
      // add
      setActiveKeys([...activeKeys, key])
      addCoinToChart(key)
    } else {
      // remove
      removeCoinFromChart(key)
    }
  }

  const generateSeries = (data: any, key: string, i: number) => {
    console.log(`${key}: generateSeries`)
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
  const toggleCoin = (key: string) => () => toggleKey(key)
  // #endregion

  // #region LIFECYCLE
  useEffect(() => {
    // fetchChartDataRoutine(state?.currency, state?.period)
    // @ts-ignore
    activeKeys.forEach((key) => addCoinToChart(key))
  }, [])
  useEffect(() => {
    keysFromUrl()
  }, [])

  useEffect(() => {
    const prices = activeKeys?.map((key, i) => generateSeries(state?.charts[key]?.prices, key, i))
    const marketCap = activeKeys?.map((key, i) => generateSeries(state?.charts[key]?.market_caps, key, i))
    const totalVolume = activeKeys?.map((key, i) => generateSeries(state?.charts[key]?.total_volumes, key, i))

    const newSeries = {
      prices,
      marketCap,
      totalVolume
    }

    setSeries(newSeries)
  }, [state?.charts, activeKeys])
  // #endregion

  // #region TABLES
  const rows = Object.keys(state?.info).map((key) => ({
    ...state?.info?.[key]
  }))
  const columns = React.useMemo(
    () => [
      {
        accessor: 'icon',
        Header: () => (
          <div style={{ width: '1rem' }} />
        ),
        Cell: ({ value, row }: { value: any; row: any }) => {
          const key = row?.original?.symbol?.toUpperCase()
          // @ts-ignore
          return <img src={coins[key].icon} style={{ width: '2rem', height: 'auto' }}/>
        }
      },
      {
        accessor: 'name',
        Header: () => (
          <div style={{ width: 'fit-content' }}>Name</div>
          // <Header
          //     value={'name'}
          //     label={'Name'}
          //     order={searchState.order}
          //     orderByColumn={searchState.orderByColumn}
          //     onToggle={noop}
          // />
        ),
        Cell: ({ value, row }: { value: any; row: any }) => (
          <div>{value}</div>
        )
      },
      {
        accessor: 'market_data.current_price.usd',
        Header: () => (
          <Header
            value={'currentPrice'}
            label={'Price'}
            order={searchState.order}
            orderByColumn={searchState.orderByColumn}
          />
        ),
        Cell: ({ value, row }: { value: any; row: any }) => (
          <div>${value}</div>
        )
      },
      {
        accessor: 'market_data.price_change_24h_in_currency.usd',
        Header: () => (
          <Header
            value={'currentPrice'}
            label={'24H'}
            order={searchState.order}
            orderByColumn={searchState.orderByColumn}
          />
        ),
        Cell: ({ value, row }: { value: any; row: any }) => {
          const { price_change_24h } = row?.original?.market_data

          return (
            <div className="w-fit-content">

              <PriceChange
                isStacked
                percentage={price_change_24h}
                value={value}
              />
            </div>
          )
        }
      },
      {
        accessor: 'market_data.price_change_percentage_7d_in_currency.usd',
        Header: () => (
          <Header
            value={'currentPrice'}
            label={'1W'}
            order={searchState.order}
            orderByColumn={searchState.orderByColumn}
          />
        ),
        Cell: ({ value, row }: { value: any; row: any }) => {
          const { price_change_percentage_7d } = row?.original?.market_data

          return (
            <div className="w-fit-content">
              <PriceChange
                isStacked
                percentage={price_change_percentage_7d}
                value={value}
              />
            </div>
          )
        }
      },
      {
        accessor: 'market_data.price_change_percentage_14d_in_currency.usd',
        Header: () => (
          <Header
            value={'currentPrice'}
            label={'2W'}
            order={searchState.order}
            orderByColumn={searchState.orderByColumn}
          />
        ),
        Cell: ({ value, row }: { value: any; row: any }) => {
          const { price_change_percentage_14d } = row?.original?.market_data

          return (
            <div className="w-fit-content">
              <PriceChange
                isStacked
                percentage={price_change_percentage_14d}
                value={value}
              />
            </div>
          )
        }
      },
      {
        accessor: 'market_data.price_change_percentage_30d_in_currency.usd',
        Header: () => (
          <Header
            value={'currentPrice'}
            label={'1M'}
            order={searchState.order}
            orderByColumn={searchState.orderByColumn}
          />
        ),
        Cell: ({ value, row }: { value: any; row: any }) => {
          const { price_change_percentage_30d } = row?.original?.market_data

          return (
            <div className="w-fit-content">
              <PriceChange
                isStacked
                percentage={price_change_percentage_30d}
                value={value}
              />
            </div>
          )
        }

      },
      {
        accessor: 'market_data.price_change_percentage_60d_in_currency.usd',
        Header: () => (
          <Header
            value={'currentPrice'}
            label={'2M'}
            order={searchState.order}
            orderByColumn={searchState.orderByColumn}
          />
        ),
        Cell: ({ value, row }: { value: any; row: any }) => {
          const { price_change_60d_in_currency } = row?.original

          return (
            <div className="w-fit-content">
              <PriceChange
                isStacked
                // @ts-ignore
                percentage={price_change_60d_in_currency?.usd}
                value={value}
              />
            </div>
          )
        }
      },
      {
        accessor: 'market_data.price_change_percentage_200d_in_currency.usd',
        Header: () => (
          <Header
            value={'currentPrice'}
            label={'6M'}
            order={searchState.order}
            orderByColumn={searchState.orderByColumn}
          />
        ),
        Cell: ({ value, row }: { value: any; row: any }) => {
          const { price_change_percentage_200d } = row?.original?.market_data

          return (
            <div className="w-fit-content">
              <PriceChange
                isStacked
                percentage={price_change_percentage_200d}
                value={value}
              />
            </div>
          )
        }
      },
      {
        accessor: 'market_data.price_change_percentage_1y_in_currency.usd',
        Header: () => (
          <Header
            value={'currentPrice'}
            label={'1Y'}
            order={searchState.order}
            orderByColumn={searchState.orderByColumn}
          />
        ),
        Cell: ({ value, row }: { value: any; row: any }) => {
          const { price_change_percentage_1y } = row?.original

          return (
            <div className="w-fit-content">
              <PriceChange
                isStacked
                percentage={price_change_percentage_1y}
                value={value}
              />
            </div>
          )
        }
      }

    ], [Object.keys(state?.info), state?.info])
  // #endregion

  // #region Components
  // fetch crypto data
  // use a web service
  // const fetchData = async () => {
  // }
  // #endregion

  return (
    <div>
      <div className={`bg-blur floating-top card ${isMobile ? 'fixed' : ''}`}>
        {/* <div style={{ marginBottom: '1rem', padding: '1rem', marginTop: '0.5rem' }}>Select coins</div> */}
        <div className="flex-row auto-scroll-x no-scrollbar" style={{ paddingBottom: '1rem', marginTop: '1rem' }}>
          {
            keys.map((key) => (
              <div key={key} style={{ marginRight: '1rem' }}>
                <div style={{
                  padding: '0 .5rem 0 .5rem',
                  opacity: activeKeys.includes(key) ? 1 : 0.35,
                  cursor: 'pointer'
                }} onClick={toggleCoin(key)}>
                  {/* @ts-ignore */}
                  <img src={coins[key].icon} alt={key} style={{ width: '2rem', height: '1uto' }} />
                  <div style={{ fontSize: '0.5rem', textAlign: 'center' }}>{key}</div>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      <div style={{ marginTop: '8rem' }} />

      <Accordion title={
        <div className="flex-row space-between">
          <FAIcon name="chart-line" />
          <div style={{ marginLeft: '1rem' }}>Price</div>
        </div>} isOpenDefault>
        <Async loading>
          <LineChart
            data={[]}
            period={state?.period}
            series={series?.prices}
            title={`Prices: ${activeKeys.toString()}`}
            onChangeRange={handleFetchChartData}
          />
        </Async>
      </Accordion>

      <Accordion title={
        <div className="flex-row space-between">
          <FAIcon name="chart-line" />
          <div style={{ marginLeft: '1rem' }}>Total Volume</div>
        </div>
      } isOpenDefault={false}>
        <Async loading>
          <LineChart
            data={[]}
            period={state?.period}
            series={series?.totalVolume}
            title={`Total Volume: ${activeKeys.toString()}`}
            onChangeRange={handleFetchChartData}
          />
        </Async>
      </Accordion>

      <Accordion title={
        <div className="flex-row space-between">
          <div><FAIcon name="chart-line" /></div>
          <div style={{ marginLeft: '1rem' }}>Market cap</div>
        </div>} isOpenDefault={false}>
        <Async loading>
          <LineChart
            data={[]}
            period={state?.period}
            series={series?.marketCap}
            title={`Market Cap: ${activeKeys.toString()}`}
            onChangeRange={handleFetchChartData}
          />
        </Async>
      </Accordion>

      <Accordion title={
        <div className="flex-row space-between">
          <div><FAIcon name="table" /></div>
          <div style={{ marginLeft: '1rem' }}>Prices</div>
        </div>
      } isOpenDefault>
        <Table
          columns={columns}
          data={rows}
        />
      </Accordion>

      <div>
        {error && JSON.stringify(error)}
      </div>
    </div>
  )
}

export default Stats