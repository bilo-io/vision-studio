/* eslint-disable import/no-anonymous-default-export */
import icon from './BTC-icon.svg'
// @ts-ignore
import whitepaper from './BTC-whitepaper.pdf'

export default {
  name: 'Bitcoin',
  code: 'BTC',
  id: 'bitcoin',
  symbol: 'BTC',
  website: 'https://bitcoin.org/en/',
  wallets: 'https://bitcoin.org/en/choose-your-wallet',
  youtube: 'https://www.youtube.com/watch?v=s4g1XFU8Gto',
  summary: 'Bitcoin is a decentralized digital currency that is based on cryptography. As such, it can operate without the need of a central authority like a central bank or a company. It is unlike government-issued or fiat currencies such as US Dollars or Euro in which they are controlled by the country’s central bank. The decentralized nature allows it to operate on a peer-to-peer network whereby users are able to send funds to each other without going through intermediaries.',
  whitepaper,
  color: '#F7931A',
  icon
}
