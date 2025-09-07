import CategoryDetails from '@/components/pages/categories/category-details';
import React from 'react';

const Page = ({ params }) => {
  const categoryId = params?.category_id;

  return (
    <CategoryDetails categoryId={categoryId} />
  );
};

export default Page;
