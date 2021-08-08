/* eslint-disable import/no-anonymous-default-export */
import icon from './XRP-icon.svg'
// @ts-ignore
import whitePaper from './XRP-whitepaper.pdf'

export default {
  id: 'ripple',
  name: 'Ripple',
  code: 'XRP',
  symbol: 'XRP',
  website: 'https://ripple.com/',
  youtube: 'https://www.youtube.com/watch?v=ahIhFvrpmIs',
  whitePaper,
  summary: `XRP Ledger (XRPL) is the open-source distributed ledger that is created by Ripple. The native cryptocurrency of the XRP Ledger is XRP.

Compared to Bitcoin (BTC) which uses a distributed blockchain whose transactions are processed and secured by proof-of-work mining, XRP transactions are processed by a network of trusted validators on the XRP Ledger. 

Ripple transactions are publicly recorded on its open-source distributed consensus ledger which has a similar data structure to a blockchain where the successive data block includes the hash of the previous block. However, its consensus mechanism is different from Bitcoin or Ethereum. It does not rely on Proof of Work (PoW) and therefore there is no mining involved with XRP. 

XRP instead relies on a consensus algorithm known as the Ripple Protocol Consensus Algorithm. The XRPL’s integrity is maintained by a group of trusted nodes. All transactions must be agreed by a supermajority of these trusted nodes for it to achieve consensus and be included in the XRP Ledger.`,
  color: '#23292F',
  icon
}
