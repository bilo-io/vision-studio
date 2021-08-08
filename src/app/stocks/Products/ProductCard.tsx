import Download from 'components/Download'
import React from 'react'

const ProductCard = ({ product, isMobile }: { product: any; isMobile?: boolean }) => (
  <div className={`product-card ${isMobile ? 'mobile' : 'desktop'}`}>
    {/* </div> style={{ background: `linear-gradient(to left, ${product?.color} 10%, #202020 100%)`}}> */}
    <div className="flex-row">
      <img src={product?.icon} alt={product?.code} style={{ width: '2rem', height: '2rem' }}/>
      <div style={{ lineHeight: '2rem' }} className="flex-row">
        <div style={{ width: '1rem' }} />
        <div>
          {product.name}
        </div>
        <div style={{ width: '1rem' }} />

        <Download preview hasIcon src={product?.whitepaper}>
                    Whitepaper
        </Download>
      </div>
    </div>
    <div className="overflow-hidden">
      <p>{product?.summary}</p>
    </div>
  </div>
)

export default ProductCard
