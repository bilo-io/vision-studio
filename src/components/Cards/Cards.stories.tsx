import React from 'react'
import { AssetCard } from './AssetCard'
import { Advert } from './Advert'
import { ActionSuggestions } from './ActionSuggestions'
import { CoinCard } from './CoinCard'
import { CardStack } from 'components/Cards'
import { noop } from 'utils/misc'
import { withProvider } from '../../../.storybook/utils/provider'

export default {
  title: 'Core/Cards',
  components: [AssetCard, CardStack],
  decorators: [withProvider]
}

export function CardsStories () {
  return (
    <div>
      <Advert item={{ text: 'Advert item.text' }}/>
      <ActionSuggestions userState={{
        isVerified: true,
        hasFunds: true,
        hasHoldings: false

      }} />
    </div>
  )
}

export const CryptoCards = () => {
  return (
    <div>
      <h4>AssetCard</h4>
      <AssetCard />
      <h4>CoinCard</h4>

      <CoinCard item={{ code: 'BTC', name: 'Bitcoin' }} onClick={noop} currency={{ code: 'usd', symbol: '$' }} />
    </div>
  )
}

export const UICards = () => {
  const backgroundLight = '#eee'
  const colorLight = '#333'

  const backgroundDark = '#333'
  const colorDark = '#eee'

  const items = [
    {
      label: 'one',
      value: '1'
    },
    {
      label: 'two',
      value: '2'
    },
    {
      label: 'three',
      value: '3'
    }
  ]
  return (
    <div>

      <h3>CardStacks</h3>
      <div>
        <div className="flex-row flex-wrap">
          {[0, 1, 2].map((num: number) => (
            <CardStack
              key={num}
              isAsync
              isSeparate
              width={'12rem'}
              height={'18rem'}
              color={colorDark}
              backgroundColor={backgroundDark}
              margin='0 0.75rem 0.75rem 0'
              // isSeparate={ collection.items.length > 5}
              renderItem={(item: any, i: number) => <>
                <div style={{
                  backgroundColor: backgroundDark,
                  height: '100%',
                  color: colorDark
                }}>
                  <pre><code>{JSON.stringify(item, undefined, 4)}</code></pre>
                </div>
              </>
              }

              items={items}>
              <div>Dark Parent {num + 1}</div>
            </CardStack>
          ))}
        </div>
        <br />
        <h4>isOpenDefault</h4>
        <div className="flex-row flex-wrap">
          {[0, 1, 2].map((num: number) => (
            <CardStack
              key={num}
              isAsync
              isSeparate
              isOpenDefault
              width={'12rem'}
              height={'18rem'}
              color={colorLight}
              backgroundColor={backgroundLight}
              margin='0 0.75rem 0.75rem 0'
              // isSeparate={ collection.items.length > 5}
              renderItem={(item: any, i: number) => <>
                <div style={{
                  backgroundColor: backgroundLight,
                  height: '100%',
                  color: colorLight
                }}>
                  <pre><code>{JSON.stringify(item, undefined, 4)}</code></pre>
                </div>
              </>
              }

              items={items.map((obj) => ({ ...obj, isOpenDefault: true, theme: 'light' }))}>
              <div>Light Parent {num + 1}</div>
            </CardStack>
          ))}
        </div>
      </div>
    </div>
  )
}
