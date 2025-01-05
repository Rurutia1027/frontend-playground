import React, { useState } from 'react'

// use
// component name must be uppercase
// must be in the function/component body --> useState cannot get out of the scope of the function, otherwise it will not work properly.
// cannot call conditionally
const UseStateBasics = () => {
  // from this log content, we know that useState is a function
  console.log(useState)
  // from this log content, we know that useState() this function has a reutnr value
  // with the declaration like this: [undefined, ƒ]
  // the first element undefined is an object, and the second element is the function which can manipulate the first object.
  // it is like we declare a private class varaibles in java,
  // and f is just like the getter/setter functions binded to the specified member variable.
  console.log(useState())

  const variable = useState(1)[0] // undefined -> int
  const variable_getter_setter = useState(1)[1] // ƒ -> controls the value that stored in the state(actually it is the variable)
  console.log(variable, variable_getter_setter)

  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world')
    } else {
      setText('random title')
    }
  }

  const [text, setText] = useState('random title') // text -> undefined, setTest -> ƒ
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
