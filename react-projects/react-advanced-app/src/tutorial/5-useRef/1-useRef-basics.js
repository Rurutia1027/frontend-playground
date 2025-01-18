import React, { useEffect, useRef } from 'react'

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null)
  const refDivContainer = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (refContainer.current.value) {
      console.log(refContainer.current.value)
    } else if (refDivContainer.current) {
      console.log(refDivContainer.current)
    } else {
      console.log('neither none of the container ref is set vaulue')
    }
  }

  useEffect(() => {
    console.log(refContainer.current)
    refContainer.current.focus()
  })

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input
            style={{ marginRight: '2rem' }}
            type='text'
            ref={refContainer}
          />
          <button type='submit'>submit</button>
        </div>
        <div ref={refDivContainer}>hello world</div>
      </form>
    </>
  )
}

export default UseRefBasics
