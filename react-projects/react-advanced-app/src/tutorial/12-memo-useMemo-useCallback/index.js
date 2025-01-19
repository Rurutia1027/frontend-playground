import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { useFetch } from '../9-custom-hooks/2-useFetch'

const url = 'https://www.course-api.com/javascript-store-products'

const calculateMostExpensive = (data) => {
  console.log('calculateMostExpensive')
  return (
    data.reduce((total, item) => {
      const price = item.fields.price
      if (price >= total) {
        total = price
      }
      return total
    }, 0) / 100
  )
}

const Index = () => {
  // if we modify the state's value below, we will trigger re-render
  const { products } = useFetch(url)
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState(0)

  // every time props or state changes, components re-renders

  // here we add a useCallback function wrap the addCart function
  // this call back function enables that
  // only when the inner [cart] this state variable is modified
  // will re-render be triggered
  const addCart = useCallback(() => {
    setCart(cart + 1)
    // we call this [cart] as dependency
    // if cart state variable is not modified, we do not need to re-create the function
  }, [cart])

  const mostExpensive = useMemo(() => {
    calculateMostExpensive(products)
  }, [products])

  return (
    <>
      <h1>Count: {count}</h1>
      <button className='btn' onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: '3rem' }}>cart : {cart}</h1>
      <h1>Most Expensive : ${mostExpensive}</h1>
      <BigList products={products} addCart={addCart} />
    </>
  )
}

const BigList = React.memo(({ products, addCart }) => {
  useEffect(() => {
    console.log('big list called')
  }, [])
  return (
    <section className='products'>
      {products.map((item) => {
        return (
          <SingleProduct
            key={item.id}
            {...item}
            addCart={addCart}
          ></SingleProduct>
        )
      })}
    </section>
  )
})

const SingleProduct = ({ fields, addCart }) => {
  useEffect(() => {
    console.log('single product called')
  }, [])
  let { name, price } = fields
  price = price / 100
  const image = fields.image[0].url

  return (
    <article className='product'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button onClick={addCart}>+</button>
    </article>
  )
}

export default Index
