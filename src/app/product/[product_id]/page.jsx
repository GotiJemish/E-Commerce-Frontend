import ProductDetailPage from '@/components/pages/all-products/product-details/ProductDetailPage'
import React from 'react'

const page = ({params}) => {
  const {productid}=params
  return (
    <ProductDetailPage id={productid}/>
  )
}

export default page
