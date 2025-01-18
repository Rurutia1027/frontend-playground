import React, { useState, useEffect } from 'react'

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [people, setPeople] = useState([])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (firstName && email) {
      console.log('submit the form')
      const person = { id: new Date().getTime().toString(), firstName, email }
      setPeople((people) => {
        return [...people, person]
      })
      console.log(people)
      setEmail('')
      setFirstName('')
    } else {
      console.log('empty values')
    }
  }

  const handleButtonSubmit = (e) => {
    e.preventDefault()
    console.log('handleButtonSubmit')
  }
  return (
    <>
      <article>
        <form className='form' onSubmit={handleFormSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name: </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => {
                // console.log(e.target.value)
                setFirstName(e.target.value)
              }}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email: </label>
            <input
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
            />
          </div>
          <button type='submit'>add person</button>
        </form>

        {people.map((person) => {
          const { id, firstName, email } = person
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs
