import React from 'react'
import Product from './Product'
import { useFetch } from '../9-custom-hooks/2-useFetch'

const url = 'https://www.course-api.com/react-prop-types-example'

const Index = () => {
  const { products } = useFetch(url)
  return (
    <div>
      <h2>products</h2>
      <section className='products'>
        {products.map((item) => {
          console.log(item)
          return <Product key={item.id} {...item} />
        })}
      </section>
    </div>
  )
}

export default Index
