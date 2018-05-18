import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({ products, currentPage, itemPerPage, totalPage, receiveProducts }) => {
	var totalObject = [],
		prevBtn = null,
		nextBtn = null
	for (var i = 1; i <= totalPage; i++) {
		totalObject.push({
			number: i,
			active: i === currentPage ? true : false
		})
	}
	if (currentPage !== 1) prevBtn = (<li><a href="">&laquo;</a></li>);
	if (currentPage !== totalPage) nextBtn = (<li><a href="">&raquo;</a></li>);
	return (
		<ul className="pagination">
			{prevBtn}
			{totalObject.map(page =>
				<li key={page.number} className={page.active ? 'active' : null} onClick={() => receiveProducts(products, page.number, itemPerPage)}><a href="javascript:void(0)">{page.number}</a></li>
			)}
			{nextBtn}
		</ul>
	)
}

Pagination.propTypes = {
	products: PropTypes.array,
	currentPage: PropTypes.number,
	itemPerPage: PropTypes.number,
	totalPage: PropTypes.number,
	receiveProducts: PropTypes.func
}

export default Pagination