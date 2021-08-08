/* eslint-disable import/no-anonymous-default-export */
import ADA from './ADA'
import BAT from './BAT'
import BNB from './BNB'
import BTC from './BTC'
import BTG from './BTG'
import DAI from './DAI'
import DOGE from './DOGE'
import ETC from './ETC'
import ETH from './ETH'
import FIL from './FIL'
import IOST from './IOST'
import LN from './LN'
import LTC from './LTC'
import LSK from './LSK'
import MATIC from './MATIC'
import MKR from './MKR'
import NEO from './NEO'
import ONT from './ONT'
import QTUM from './QTUM'
import THETA from './THETA'
import TRX from './TRX'
import USDC from './USDC'
import USDT from './USDT'
import VET from './VET'
import XLM from './XLM'
import XMR from './XMR'
import XRP from './XRP'
import ZEC from './ZEC'

const coins = {
  BTC,
  ETH,
  ADA,
  BAT,
  BNB,
  DOGE,
  NEO,
  LN,
  LTC,
  TRX,
  USDC,
  USDT,
  XLM,
  XRP,
  VET,
  XMR,
  THETA,
  MKR,
  MATIC,
  FIL,
  DAI
}

export const exludedCoins = {
  ETC,
  IOST,
  LSK,
  QTUM,
  ONT,
  BTG,
  ZEC
}

export const keys = Object.keys(coins)

export const getIdForCode = (code: string) => {
  return coins?.[code]?.id
}

export const getCodeForId = (id: string) => {
  return keys.filter((code) => id === coins?.[code]?.id)?.[0]
}

export default coins
