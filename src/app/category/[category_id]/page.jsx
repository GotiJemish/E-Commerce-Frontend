import CategoryDetails from '@/components/pages/categories/category-details'
import React from 'react'

const page = async({params}) => {
  const categoryId=await params?.category_id
    return (
<CategoryDetails categoryId={categoryId}/>
    )
}

export default page
