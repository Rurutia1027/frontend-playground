// the reason we can use {img, title, author} here is because
// we use {...book} in invoking section, and {...book} means an operation to expand all items
// and pass them as parameters to the Book function
export const Book = ({ img, title, author }) => {
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
