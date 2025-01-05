import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import { books } from './books'
import { Book } from './Book'

// Nexted Components, React Tools

// set vars here

const names = ['john', 'peter', 'susan']
const newNames = names.map((name) => {
  return <h1>{name}</h1>
})
console.log(newNames)
function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        // the way we use like '...book' it means to seperate all items that contained in the book
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
