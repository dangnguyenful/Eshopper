import React from 'react'
import PropTypes from 'prop-types'
import ProductItem from './ProductItem'
import Pagination from './Pagination'
import paging from '../../utilities/paging'

const ProductsList = ({ products, currentPage, itemPerPage, totalPage }) => {
  return (
    <div>
      {paging(products, currentPage, itemPerPage).map(product =>
    		<ProductItem
    		key={product.id}
    		{...product}
    		/>
      )}
      <Pagination currentPage={currentPage} itemPerPage={itemPerPage} totalPage={totalPage}/>
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
  totalPage: PropTypes.number
}

export default ProductsList
