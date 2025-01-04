import React from 'react'
import ReactDom from 'react-dom'

// Nexted Components, React Tools

function App() {
  return (
    <div>
      <h2>hello world</h2>
      <p>this is my message</p>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
