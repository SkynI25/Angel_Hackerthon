import React from 'react'
import Cover from '../../components/Category/Cover/Cover'

const Category = ({ match }) => {
  const categoryId = (match && match.params && match.params.categoryId) || null

  if (!categoryId) {
    // redirect
  }

  return (
    <div>
      <Cover title={categoryId} />
    </div>
  )
}

export default Category
