import ProductDetailPage from '@/components/pages/all-products/product-details/ProductDetailPage'
import React from 'react'

const page = ({params}) => {
  const productId=params?.product_id
  return (
    <ProductDetailPage id={productId}/>
  )
}

export default page
