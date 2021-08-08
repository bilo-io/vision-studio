import React, { useState } from 'react'
import FAIcon from 'react-fontawesome'
import Download from 'components/Download'

const ProductCard = ({ product, isMobile }: { product: any; isMobile?: boolean }) => {
  const [tab, setTab] = useState<string | null>(null)
  const setOrDeactivateTab = (value: string) => {
    setTab(tab === value ? null : value)
  }

  return (
    <div className={`product-card ${isMobile ? 'mobile' : 'desktop'}`} style={{ opacity: tab === null ? '0.6' : 1 }}>
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
        <div className='flex-row' onClick={() => setOrDeactivateTab('info')}>
          <FAIcon name='info-circle' style={{ marginRight: '.5rem', fontSize: '1.5rem' }}/>
          <div>Info</div>
        </div>
        <div className='flex-row' onClick={() => setOrDeactivateTab('chart')}>
          <FAIcon name='chart-line' />
        </div>
        <div className='flex-row' onClick={() => setOrDeactivateTab('trade')}>
          <div>Trade</div>
          <FAIcon name='exchange-alt' style={{ marginLeft: '.5rem' }}/>
        </div>
      </div>
      {
        tab !== null && (
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
          <div>
            Trade
          </div>
        )}
    </div>
  )
}

export default ProductCard
