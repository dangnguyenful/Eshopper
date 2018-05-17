import React from 'react'
import PropTypes from 'prop-types'
import ProductItem from './ProductItem'

const ProductsList = ({ products, startPage, itemPerPage }) => {
  let productNeedToLoad = products.slice((startPage-1)*itemPerPage, startPage*itemPerPage)
  return (
    <div>
      {productNeedToLoad.map(product =>
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
  }).isRequired).isRequired
}

export default ProductsList
