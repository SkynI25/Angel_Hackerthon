import React from 'react'

const Category = ({ match }) => {
  const categoryId = (match && match.params && match.params.categoryId) || null

  if (!categoryId) {
    // redirect
  }

  return <div>category page : {categoryId}</div>
}

export default Category
