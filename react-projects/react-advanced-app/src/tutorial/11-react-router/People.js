import React, { useState } from 'react'
import { data } from '../../data'
import { Link } from 'react-router-dom'

const People = () => {
  const [people, setPeople] = useState(data)
  return (
    <div>
      <h1>People</h1>
      {people.map((item) => {
        return (
          <div key={item.id} className='item'>
            <h4>{item.name}</h4>
            {/* dynamic link */}
            <Link to={`/person/${item.id}`}>Learn More</Link>
          </div>
        )
      })}
    </div>
  )
}

export default People
