import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({ products, currentPage, itemPerPage, totalPage, receiveProducts }) => {
	let totalObject = [],
		prevBtn = null,
		nextBtn = null,
		prevNumber = 1,
		nextNumber = totalPage,
		invisibleStyle = {
			visibility: 'hidden'
		}
	for (var i = 1; i <= totalPage; i++) {
		totalObject.push({
			number: i,
			active: i === currentPage ? true : false
		})
	}

	if (currentPage === 1) {
		prevBtn = invisibleStyle
	} else {
		prevNumber = currentPage - 1
	}

	if (currentPage === totalPage) {
		nextBtn = invisibleStyle
	} else {
		nextNumber = currentPage + 1
	}
	
	return (
		<ul className="pagination">
			<li style={prevBtn} onClick={() => receiveProducts(products, prevNumber, itemPerPage)}><a href="no-script-url">&laquo;</a></li>
			{totalObject.map(page =>
				<li key={page.number} className={page.active ? 'active' : null} onClick={() => receiveProducts(products, page.number, itemPerPage)}><a href="no-script-url">{page.number}</a></li>
			)}
			<li style={nextBtn} onClick={() => receiveProducts(products, nextNumber, itemPerPage)}><a href="no-script-url">&raquo;</a></li>
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