import React from 'react'
import PropTypes from 'prop-types'
import ProductItem from './ProductItem'

const ProductsList = ({ products }) => (
  <ul>
    {products.map(product =>
  		<ProductItem
  		key={product.title}
  		{...product}
  		/>
    )}
  </ul>
)

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default ProductsList
