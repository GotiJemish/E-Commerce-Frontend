import ProductDetailPage from '@/components/pages/all-products/product-details/ProductDetailPage'
import React from 'react'

const page = ({params}) => {
  const {product_id}=params

  return (
    <ProductDetailPage id={product_id}/>
  )
}

export default page
