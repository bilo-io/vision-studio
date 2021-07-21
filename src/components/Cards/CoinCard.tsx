import React from 'react'

export const CoinCard = ({ item, currency, onClick }: { item: any, currency: any, onClick?: Function }) => {
  const value = item?.market_data?.price_change_percentage_7d
  const color = value > 0 ? 'colors positive' : value < 0 ? 'colors negative' : 'colors neutral'
  console.log({ value })

  return <div
    key={item?.id}
    className={`coin-card ${color}`}
    onClick={() => onClick?.(item)}>
    <div className="flex-row space-between">
      <div className="flex-row">
        <img src={item?.image?.large} alt={`${item?.id}`} style={{ height: '2rem', padding: '0.5rem' }}/>
        <div className="name">{item.name}</div>
      </div>
      <div className="price">
        { currency?.symbol}{item?.market_data?.current_price[currency.code.toLowerCase()]}
      </div>
    </div>
  </div>
}

export default CoinCard
