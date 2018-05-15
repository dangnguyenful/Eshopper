import React from 'react'
import PropTypes from 'prop-types'

const ProductsList = ({ products }) => (
  <ul>
    {products.map(product =>
      <li key={product.title}>{product.title}</li>
    )}
  </ul>
)

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default ProductsList
