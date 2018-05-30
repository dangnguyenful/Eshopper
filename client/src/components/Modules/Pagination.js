import React from 'react'
import PropTypes from 'prop-types'
import { getProducts } from '../../actions/products'
import store from '../../store'

const Pagination = ({ currentPage, itemPerPage, totalPage, query }) => {
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
			<li style={prevBtn} onClick={() => store.dispatch(getProducts({currentPage: prevNumber, itemPerPage: itemPerPage, categoryId: query.categoryId}))}><a href="javascript:void(0)">&laquo;</a></li>
			{totalObject.map(page =>
				<li key={page.number} className={page.active ? 'active' : null}><a href="javascript:void(0)" onClick={() => store.dispatch(getProducts({currentPage: page.number, itemPerPage: itemPerPage, categoryId: query.categoryId}))}>{page.number}</a></li>
			)}
			<li style={nextBtn} onClick={() => store.dispatch(getProducts({ currentPage: nextNumber, itemPerPage: itemPerPage, categoryId: query.categoryId }))}><a href="javascript:void(0)">&raquo;</a></li>
		</ul>
	)
}

Pagination.propTypes = {
	currentPage: PropTypes.number,
	itemPerPage: PropTypes.number,
	totalPage: PropTypes.number,
	query: PropTypes.object
}

export default Pagination