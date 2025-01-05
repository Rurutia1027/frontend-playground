import React from 'react'

const UseStateObject = () => {
  const [person, setPerson] = React.useState({
    name: 'Sam',
    age: '23',
    message: 'I like guitar!',
  })
  return <h2>useState Object Example</h2>
}

export default UseStateObject
