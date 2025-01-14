// starting with import react component(s) from react dependency.

// This is called th ESX modules where esentially we can get a piece of functionality into our file.
// This is just the javascript, and this is nothing specific to react now.
import React from 'react'

/// this is only be imported once in our project-scope
// we add it to index.js is just because index.js is our react-app's **Entry Point**
import ReactDom from 'react-dom'
// Here, we are creating our first React component.
// A React component alwasy starts as a function. However, to indicate to React that this function
// is a **Component**, we must capitalize its name (e.g., MyComponent).
// The return type of this **Component** function must follow the syntax of JSX(JavaScript XML).
// which allows us to write HTML-like code within JavaScript.
function Greeting() {
  // This is the JSX(JavaScript XML which is a combination of HTML/XML and JavaScript)
  return (
    <React.Fragment>
      <div>
        <h3>hello world in parallel</h3>
        <ul>
          <li>
            <a href='#'>hello world</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>hello world in parallel</h3>
      </div>
    </React.Fragment>
    // here we need to take care that always return a single element.
  )
}

// after we finish it nothing will show on the web browser's page.
// because index.js is a javascript entry point
// normally what we need to do in index.js is to setup the component, and importing some libraries.
// and those index.js scoped created components will be imported by index.html and then the components
// can be shown on the website's pages.

// What's more the components shown to the HTML pages, should be referenced by ID.
// And this ID is coming from react's ReactDom this library which locates in the react dependency with the name of 'react-dom'

// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hello world')
//   )
// }

// and here take care of this self-closing tag, don't forget this.
ReactDom.render(<Greeting />, document.getElementById('root'))
