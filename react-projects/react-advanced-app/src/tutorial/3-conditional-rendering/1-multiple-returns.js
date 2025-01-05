import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users/QuincyLarsxon'

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState('default user')
  const [error, setError] = useState('Default Error Info')

  useEffect(() => {
    fetch(url)
      .then((item) => {
        if (item.status != 200) {
          setIsError(true)
          return item.json()
        }
        return item.json()
      })
      .then((user) => {
        if (isError) {
          setError(user.message || 'Something went wrong')
        } else {
          const { login } = user
          console.log(login)
          setUser(login)
        }
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsError(true)
        setError(error || 'Unexpected error occurred')
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>Error: {error}</h2>
  }

  return (
    <div>
      <h1>{user}</h1>
    </div>
  )
}

export default MultipleReturns
