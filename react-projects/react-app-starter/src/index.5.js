import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

// Nexted Components, React Tools

// set vars here
const books = [
  {
    img: 'https://m.media-amazon.com/images/I/91-E86oM2IL._SY522_.jpg',
    title:
      'Forgotten Home Apothecary : 250 Powerful Remedies at Your Fingertips',
    author: 'Dr. Nicole Apelian',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81AHTyq2wVL._AC_UL210_SR195,210_.jpg',
    title: 'The Housemaid ',
    author: 'Freida McFadden',
  },

  {
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
  return <section className='booklist'>{newNames}</section>
}

const Book = ({ img, title, author, children }) => {
  console.log(children)
  return (
    <article className='book'>
      <img src={img} width={100} height={130} />
      <h3>{title}</h3>
      <h4>{author}</h4>
      {children}
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
