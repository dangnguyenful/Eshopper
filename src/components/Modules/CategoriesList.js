import React from 'react'
import PropTypes from 'prop-types'
import CategoryItem from './CategoryItem'

const CategoriesList = ({ categories }) => {
  return (
    <div>
      {categories.map(category =>
    		<CategoryItem
    		key={category.id}
    		{...category}
    		/>
      )}
    </div>
  )
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default CategoriesList
