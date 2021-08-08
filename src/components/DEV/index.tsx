import React from 'react'

function DEV ({ children, success, error, DEBUG }: { children?: any, success?: any, error?: any, DEBUG?: any }) {
  const IS_DEV = ['http://localhost:3000', 'https://vision-studio.vercel.app'].includes(window.location.origin)
  const codeContainerStyle = {
    borderRadius: '12px',
    padding: '.5rem'
  }
  console.log({ IS_DEV, origin: window.location.origin })

  const colSuccess = { color: '#00FF88', backgroundColor: '#002222' }
  const colError = { color: '#FF0000', backgroundColor: '#330000' }
  const colDefault = { color: 'inherit', backgroundColor: '#66666666' }

  const prettyPrint = (item: any) => {
    return JSON.stringify(item, undefined, 2)
  }

  return (
    <>
      {children}

      {
        IS_DEV && false && (
          <>
            {
              success && <div style={{ ...codeContainerStyle, ...colSuccess }}>
                <pre>
                  <code>
                    {prettyPrint(success)}
                  </code>
                </pre>
              </div>
            }
            {
              error && <div style={{ ...codeContainerStyle, ...colError }}>
                <pre>
                  <code>
                    {prettyPrint(error)}
                  </code>
                </pre>
              </div>
            }
            {
              DEBUG && <div style={{ ...codeContainerStyle, ...colDefault }}>
                <pre>
                  <code>
                    {prettyPrint(DEBUG)}
                  </code>
                </pre>
              </div>
            }
          </>
        )
      }
    </>
  )
}

export default DEV
