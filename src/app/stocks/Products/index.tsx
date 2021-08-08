import React, { useEffect, useState } from 'react'
import cryptoData from 'assets/crypto'
import { currency } from 'utils/locale'
import { withCommas } from 'utils/format-number'
import PieChart from 'components/Charts/PieChart'
import Advert from 'components/Cards/Advert'
import ActionSuggestions from 'components/Cards/ActionSuggestions'
import useWindowSize from 'hooks/use-window-size'
import ProductCard from './ProductCard'

const adverts = [
  {
    name: 'Stats',
    text: 'Explore and compare crypto data',
    color: 'linear-gradient(to left, #09485f, #333)'
  },
  {
    name: 'BulkTrade',
    text: 'Trade multiple crypto currencies at once',
    color: 'linear-gradient(to left, #8844FF, #333)'
  },
  {
    name: 'Crypto news',
    text: 'Hear the latest news on cryptocurrencies',
    color: 'linear-gradient(to left, #FF3388, #333)'
  },
  {
    name: 'Price Alerts (coming soon)',
    text: 'Configure price alerts for specific currencies, and get notified when the go above or below a custom threshold',
    color: 'linear-gradient(to left, #3388FF, #333)'
  }
]

const BulkTradeUI = () => {
  const windowSize = useWindowSize()
  const isMobile = windowSize?.width && windowSize?.width < 480

  // @ts-ignore
  const products = Object.keys(cryptoData).map(code => ({ code, ...cryptoData[code] }))
  return (
    <div className={isMobile ? 'flex-col' : 'flex-row flex-wrap'}>
      {
        products.map((product: any, i: number) => (
          <ProductCard key={i} product={product}/>
        ))
      }
    </div>
  )
}

const Products = () => {
  const showHoldings = true
  const [advert, setAdvert] = useState<any>(adverts[Math.floor(Math.random() * adverts.length)])
  const windowSize = useWindowSize()
  const isMobile = windowSize?.width && windowSize?.width < 480

  useEffect(() => {
    const interval = setInterval(() => {
      setAdvert(adverts[Math.floor(Math.random() * adverts.length)])
    }, 10_000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const userState = {
    isVerified: true,
    hasFunds: true,
    hasHoldings: true
  }

  const portfolio = {
    totalAmount: 1_148_867.59,
    fiatAmount: 148_867.59,
    breakdown: [
      {
        code: 'BTC',
        name: 'Bitcoin',
        units: '1.5',
        amount: 750_000
      },
      {
        code: 'ETH',
        name: 'Ethereum',
        units: '7.91',
        amount: 250_000
      },
      {
        code: 'ZAR',
        name: 'Rand',
        units: '148_867.59',
        amount: 148_867.59
      }
    ]
  }

  const ProductsSummary = ({ data }: { data: any }) => (
    <div className={`portfolio-holdings ${isMobile ? 'mobile' : ''}`
    }>
      <div className="text-center"
        style={{
          fontSize: '1.5rem',
          marginTop: '1rem'
        }}>
        {currency?.symbol}{withCommas(data?.totalAmount)}
      </div>
      <div style={{ position: 'relative', overflow: 'hidden', width: '100%', margin: 'auto', marginTop: '-6rem' }}>
        <PieChart selector={'amount'} data={portfolio.breakdown} isLoading={false} title=""/>
      </div>
    </div>
  )
  return (
    <>

      {showHoldings && userState.hasHoldings && <ProductsSummary data={portfolio} />}

      {
        userState.hasHoldings
          ? (
            showHoldings && <div style={{ paddingTop: '14rem' }} />
          )
          : (
            <Advert item={advert} />
          )
      }

      <ActionSuggestions userState={userState} />

      <div style={{ width: 'fit-content', margin: 'auto' }}>
        <BulkTradeUI />
      </div>
    </>
  )
}

export default Products
