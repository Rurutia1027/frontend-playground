import React, { useEffect, useState } from 'react'

// by default runs after every re-render
// clean up function
// second parameter

const UseEffectBase = () => {
  const [value, setValue] = useState(0)
  // here, useEffect is the hook and it's inner () => {} is the we called call back function
  useEffect(() => {
    // userEffect: preserve the values between renders
    // and trigger re-render
    // useEffect will run after every render by default
    console.log('call useEffect')
    if (value > 1) {
      document.title = `New Messages(${value})`
    }
    // here we append dependency to the useEffect hook
    // it this dependency array is empty it means it only runs on the initial render
    // other components triggerred re-renders will not invoke this useEffect's inner logic
  }, [value])

  console.log('render component')
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  )
}

export default UseEffectBase
