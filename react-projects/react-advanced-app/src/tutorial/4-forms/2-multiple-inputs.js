import React, { useState } from 'react'

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [people, setPeople] = useState([])
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setPerson({ ...person, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (person.firstName && person.age && person.email) {
      const newPerson = { ...person, id: new Date().getTime().toString() }
      setPeople([...people, newPerson])
      setPerson({ firstName: '', email: '', age: '' })
    } else {
    }
  }

  return (
    <>
      <article>
        <form className='form'>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            ></input>
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='text'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button className='btn' onClick={handleSubmit}>
            add person
          </button>
        </form>
        {people.map((p) => {
          return (
            <div className='item' key={p.id}>
              <h4>FirstName: {p.firstName}</h4>
              <p>Email: {p.email}</p>
              <p>Age: {p.age}</p>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default ControlledInputs
