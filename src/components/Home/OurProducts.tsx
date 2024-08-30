import '../../assets/styles/components/home/OurProducts.scss'
import { useState } from 'react'
import useGetProducts from '../../hooks/useGetProducts'
import ProductItem from '../common/ProductItem'
import { Product } from '../../types/common'

const OurProducts = () => {
  const [showMoreTake, setShowMoreTake] = useState(12)
  const [params, setParams] = useState({
    'ShowMore.Take': showMoreTake
  })

  const { products, loading, error } = useGetProducts(params)

  if (loading) return <p>Loading products...</p>
  if (error) return <p>{error}</p>

  const handleShowMore = () => {
    setParams(() => (
      {
        'ShowMore.Take': showMoreTake + 12 
    }))
    setShowMoreTake(prevShowMoreTake => prevShowMoreTake + 12)
  }
  
  console.log(products)
  
  return (
    <div className='our-products-container'>
      <h3>Our Products</h3>
      <div className='products-list'>
        {products !== undefined && products[0]?.['products']?.map((product:Product) => (
            <ProductItem key={product.id} product={product} />
          ))
        }
      </div>
      <button onClick={handleShowMore}>
        Show More
      </button>
    </div>
  )
}

export default OurProducts