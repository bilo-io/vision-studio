import React, { useState } from 'react'
import FAIcon from 'react-fontawesome'
import Download from 'components/Download'

const ProductCard = ({ product, isMobile, defaultTradeType, defaultTab }: { product: any; isMobile?: boolean, defaultTradeType?: boolean, defaultTab?: boolean }) => {
  const [tab, setTab] = useState<string | null>(defaultTab)
  const [tradeType, setTradeType] = useState<'buy' | 'sell' | null>(defaultTradeType)

  const setOrDeactivateTab = (value: string) => {
    setTab(tab === value ? null : value)
  }

  return (
    <div>
      <div className={`product-card ${isMobile ? 'mobile' : 'desktop'}`} style={{ opacity: tab === null ? 0.7 : 1 }}>
        {/* </div> style={{ background: `linear-gradient(to left, ${product?.color} 10%, #202020 100%)`}}> */}
        <div className="flex-row">
          <img src={product?.icon} alt={product?.code} style={{ width: '1.5rem', height: '1.5rem' }}/>
          <div style={{ lineHeight: '2rem' }} className="flex-row space-between full-width">
            <div className="flex-row">
              <div style={{ marginRight: '1rem' }} />
              <div>
                {product.name}
              </div>
            </div>

            <Download preview hasIcon iconRight src={product?.whitepaper}>
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
              <div className='divider horizontal' />
              <br />
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
            Chart
            </div>
          )}
        {
          tab === 'trade' && (
            <div style={{ paddingBottom: '.5rem' }}>
              {
                <div className="trade-types">
                  <div
                    onClick={() => setTradeType('buy')}
                    className={`item ${tradeType === 'buy' ? 'active' : ''}`}>
                      Buy
                  </div>
                  <div
                    onClick={() => setTradeType('sell')}
                    className={`item ${tradeType === 'sell' ? 'active' : ''}`}>
                      Sell
                  </div>
                </div>
              }
              {
                tradeType !== null && (
                  <>
                    <div className="text-center" style={{ marginTop: '.5rem' }}>
                      {tradeType === 'buy' ? 'using' : 'for'}
                    </div>
                    <input className="trade-input" type="number" placeholder="0.00"/>
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
