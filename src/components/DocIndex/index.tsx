// #region Modules
import React, {
  useState,
  useEffect
} from 'react'
// #endregion

export const DocIndex = ({ headerQuery, footerQuery, style, ...rest }: any) => {
  // #region STATE
  const [headers, setHeaders] = useState<any[]>([])
  const [footers, setFooters] = useState<any[]>([])
  // #endregion

  // #region LIFECYCLE
  useEffect(() => {
    if (headers.length === 0) {
      const newHeaders = Array.from(document.querySelectorAll(headerQuery))
      const newFooters = Array.from(document.querySelectorAll(footerQuery))
      if (Array.isArray(newHeaders)) {
        setHeaders(newHeaders)
        setFooters(newFooters)
        if (newHeaders.length !== newFooters.length) {
          console.error(`DOC_INDEX_ERROR: headers Array(${newHeaders.length}) != footers Array(${newFooters.length})`)
        }
      }
    }
  })
  // #endregion

  // #region MISC
  const scrollTo = (element: any) => () => {
    element?.scrollIntoView({ block: 'end', behavior: 'smooth' })
  }
  // #endregion

  // #region RENDER
  return <div className='doc-index' style={ style }>
    {
      (headers || []).map((element, i) => (
        <div
          key={ i }
          onClick={ scrollTo(footers[i]) }
          className='doc-index-item'>
          <span>{ element.innerText }</span>
        </div>
      ))
    }
  </div>
  // #endregion
}
