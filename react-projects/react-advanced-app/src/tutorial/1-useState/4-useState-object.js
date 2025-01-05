import React from 'react'

const UseStateObject = () => {
  const [person, setPerson] = React.useState({
    name: 'Sam',
    age: '23',
    message: 'I like guitar!',
  })

  const [name, setName] = React.useState('Sam')
  const [age, setAge] = React.useState(23)
  const [message, setMessage] = React.useState('I like Pizza !')

  const changeMessage = () => {
    setMessage('Hello World !')
  }
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  )
}

export default UseStateObject
