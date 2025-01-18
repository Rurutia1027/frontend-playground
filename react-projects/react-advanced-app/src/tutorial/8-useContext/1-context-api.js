import React, { useState, useContext } from 'react'
import { data } from '../../data'

const PersonContext = React.createContext()

// two components - Provider, Consumer

// this is root component
const ContextAPI = () => {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((item) => item.id != id)
    })
  }

  return (
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>Context API / useContext</h3>
      <List people={people} />
    </PersonContext.Provider>
  )
}

const List = () => {
  const mainData = useContext(PersonContext)
  return (
    <>
      {mainData.people.map((item) => {
        return <SinglePerson key={item.id} {...item} />
      })}
    </>
  )
}

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext)
  console.log(data)
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  )
}

export default ContextAPI
