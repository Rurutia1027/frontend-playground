import React, { useState } from 'react'

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  const firstValue = text || 'hello world'
  const secondValue = text && 'hello world'

  return (
    <>
      <h1>{text || 'React Short Cicuit'}</h1>
      <button className='btn' onClick={() => setIsError(!isError)}>Toggle Error</button>
      {isError && <h1>Error...</h1>}      
      {isError ? <p>there is an error ...</p>: <p>no error...</p> }
    </>
  )
}

export default ShortCircuit
