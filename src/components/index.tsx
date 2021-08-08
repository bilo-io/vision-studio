/* eslint-disable import/no-anonymous-default-export */
import Accordion from './Accordion'
import Async from './Async'
import { Loader, LoaderType } from './Loader'
import { ErrorBoundary } from './ErrorBoundary'
import { Tabs } from './Tabs'
// import Cards from './Cards'
export * from './Cards'
export default {
  Accordion,
  Async,
  // Card: Cards.Card,
  // CardStack: Cards.CardStack,
  ErrorBoundary,
  Loader,
  LoaderType,
  Tabs
}
