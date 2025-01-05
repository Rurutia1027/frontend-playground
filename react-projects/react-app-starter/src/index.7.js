import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

// Nexted Components, React Tools

// set vars here
const books = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/91-E86oM2IL._SY522_.jpg',
    title:
      'Forgotten Home Apothecary : 250 Powerful Remedies at Your Fingertips',
    author: 'Dr. Nicole Apelian',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81AHTyq2wVL._AC_UL210_SR195,210_.jpg',
    title: 'The Housemaid ',
    author: 'Freida McFadden',
  },

  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/71jQf89FR-L._AC_UL330_SR330,330_.jpg',
    title:
      'The Home Apothecary Full Collection: Your In-Depth Holistic Guide with Natural Herbal Remedies for Long-Lasting Wellness and Optimal Health',
    author: 'Megan Morren',
  },
]

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

// the reason we can use {img, title, author} here is because
// we use {...book} in invoking section, and {...book} means an operation to expand all items
// and pass them as parameters to the Book function
const Book = ({ img, title, author }) => {
  // const { img, title, author } = props
  const clickHandler = () => {
    alert('Hello world')
  }

  const complexExample = (author) => {
    console.log(author)
  }
  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} width={100} height={130} />
      <h3>{title}</h3>
      <h4 onClick={() => console.log(author)}>{author}</h4>
      <button type='button' onClick={clickHandler}>
        reference example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
