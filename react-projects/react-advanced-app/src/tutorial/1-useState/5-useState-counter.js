import React, { useState } from 'react'

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1)
      setValue((preValue) => {
        return preValue + 1
      })
    }, 2000)
  }
  return (
    <>
      <section style={{ margin: '4rem 0' }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button
          className='btn'
          onClick={() => {
            let _value = value
            setValue(_value + 1)
          }}
        >
          +
        </button>
        <button
          className='btn'
          onClick={() => {
            let _value = value
            setValue(_value - 1)
          }}
        >
          -
        </button>
        <button
          className='btn'
          onClick={() => {
            setValue(0)
          }}
        >
          reset
        </button>
      </section>
      <section style={{ margin: '4rem 0' }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  )
}

export default UseStateCounter
