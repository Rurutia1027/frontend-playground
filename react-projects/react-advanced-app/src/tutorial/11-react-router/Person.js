import React, { useEffect, useState } from 'react'
import { data } from '../../data'
import { Link, useParams } from 'react-router-dom'

const Person = () => {
  const [name, setName] = useState('default name')
  const { id } = useParams()
  console.log(id)
  useEffect(() => {
    const newPerson = data.find((person) => person.id == parseInt(id))
    setName(newPerson.name)
  }, [])
  return (
    <div>
      <h2>{name}</h2>
      <Link to='/people' className='btn'>
        Back To People
      </Link>
    </div>
  )
}

export default Person
