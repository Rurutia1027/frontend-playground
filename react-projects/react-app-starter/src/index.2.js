import ReactDom from 'react-dom'

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

function App() {
  return (
    <div>
      <h2>hello react</h2>
      <ul>
        <li>
          <a href='#'>hello react link</a>
        </li>
      </ul>
    </div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
