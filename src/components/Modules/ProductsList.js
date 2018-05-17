import React from 'react'
import PropTypes from 'prop-types'
import ProductItem from './ProductItem'

const ProductsList = ({ products, currentPage, itemPerPage }) => {
  return (
    <div>
      {products.map(product =>
    		<ProductItem
    		key={product.id}
    		{...product}
    		/>
      )}
    </div>
  )
}

ProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired).isRequired,
  currentPage: PropTypes.string,
  itemPerPage: PropTypes.string,
  totalPage: PropTypes.string
}

export default ProductsList
