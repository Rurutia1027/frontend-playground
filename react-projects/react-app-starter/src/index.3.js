import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

// Nexted Components, React Tools

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image></Image>
      <Title />
      <Author />
    </article>
  )
}

const Image = () => {
  return (
    <img
      src='https://m.media-amazon.com/images/I/91-E86oM2IL._SY522_.jpg'
      width='100'
      height='140'
    />
  )
}

const Title = () => (
  <h3>Forgotten Home Apothecary : 250 Powerful Remedies at Your Fingertips</h3>
)

const Author = () => {
  return <h4>Dr. Nicole Apelian</h4>
}

ReactDom.render(<BookList />, document.getElementById('root'))
