import React from 'react'
import PropTypes from 'prop-types'
import ProductItem from './ProductItem'
import Pagination from './Pagination'
import paging from '../../utilities/paging'

const ProductsList = ({ products, currentPage, itemPerPage, query }) => {
  let lastQuery = {
        ...query,
        currentPage: query.currentPage ? query.currentPage : currentPage,
        itemPerPage: query.itemPerPage ? query.itemPerPage : itemPerPage
      },
      lastPageNumber = (products.length % itemPerPage) !== 0 ? 1 : 0,
      totalPage = 0,
      isPaging = false,
      currentProducts = []

  lastQuery.totalPage = query.totalPage ? query.totalPage : Math.floor(products.length/itemPerPage) + lastPageNumber
  lastQuery.isPaging = lastQuery.currentPage && lastQuery.itemPerPage ? true : false
  currentProducts = lastQuery.isPaging ? paging(products, currentPage, itemPerPage) : products

  return (
    <div>
      {currentProducts.map(product =>
    		<ProductItem
    		key={product.id}
    		{...product}
    		/>
      )}
      <Pagination query={lastQuery}/>
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
  query: PropTypes.object
}

export default ProductsList
