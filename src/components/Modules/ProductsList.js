import React from 'react'
import PropTypes from 'prop-types'
import ProductItem from './ProductItem'
import Pagination from './Pagination'
import paging from '../../utilities/paging'

const ProductsList = ({ products, currentPage, itemPerPage, receiveProducts }) => {
  let lastPage = (products.length % itemPerPage) !== 0 ? 1 : 0,
      totalPage = (products.length/itemPerPage) + lastPage,
      currentProducts = currentPage && itemPerPage ? paging(products, currentPage, itemPerPage) : products
  return (
    <div>
      {currentProducts.map(product =>
    		<ProductItem
    		key={product.id}
    		{...product}
    		/>
      )}
      <Pagination currentPage={currentPage} itemPerPage={itemPerPage} totalPage={totalPage} receiveProducts={receiveProducts} products={products}/>
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
  currentPage: PropTypes.number,
  itemPerPage: PropTypes.number,
  totalPage: PropTypes.number,
  receiveProducts: PropTypes.func
}

export default ProductsList
