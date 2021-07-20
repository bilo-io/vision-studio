import React from 'react'
import { useHistory } from 'react-router'
import imgError from 'assets/img/exclamation.png'

export const Error = () => {
  const history = useHistory()

  return (
    <div className="w-fit-content mx-auto text-center">
      <img
        style={{
          width: '6rem',
          height: '6rem',
          marginTop: '4rem',
          marginBottom: '4rem'
        }}
        src={imgError} alt="error-page"
      />
      <h4 style={{ fontStyle: 'italic' }}>An unexpected error ocurred ...</h4>
      <br />
      <br />
      <div>
        <button className="error solid" onClick={() => history?.push?.('/')}>
                  Return to safety
        </button>
      </div>
    </div>
  )
}

export default Error
