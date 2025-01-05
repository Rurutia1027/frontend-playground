import React from 'react'
import { data } from '../../data'

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  const handleClick = () => {
    setPeople([])
  }

  const removeItem = (id) => {
    let newPeople = people.filter((person) => {
      return person.id !== id
    })
    setPeople(newPeople)
  }

  return (
    <>
      {people.map((person) => {
        console.log(person)
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button className='btn' onClick={() => removeItem(id)}>
              Remove
            </button>
          </div>
        )
      })}

      {people.length > 0 && (
        <button className='btn' onClick={handleClick}>
          clear items
        </button>
      )}
    </>
  )
}

export default UseStateArray
