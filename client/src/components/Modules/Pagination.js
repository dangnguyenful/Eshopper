import React from 'react'
import PropTypes from 'prop-types'
import { getProducts } from '../../actions/products'
import store from '../../store'

const Pagination = ({ query }) => {
	if (!query.isPaging) return null

	let totalObject = [],
		prevBtn = null,
		nextBtn = null,
		prevNumber = 1,
		nextNumber = query.totalPage,
		invisibleStyle = {
			visibility: 'hidden'
		}
	for (var i = 1; i <= query.totalPage; i++) {
		totalObject.push({
			number: i,
			active: i === query.currentPage ? true : false
		})
	}

	if (query.currentPage === 1) {
		prevBtn = invisibleStyle
	} else {
		prevNumber = query.currentPage - 1
	}

	if (query.currentPage === query.totalPage) {
		nextBtn = invisibleStyle
	} else {
		nextNumber = query.currentPage + 1
	}

	return (
		<ul className="pagination">
			<li style={prevBtn} onClick={() => store.dispatch(getProducts({ currentPage: prevNumber, itemPerPage: query.itemPerPage, categoryId: query.categoryId}))}><a href="javascript:void(0)">&laquo;</a></li>
			{totalObject.map(page =>
				<li key={page.number} className={page.active ? 'active' : null}><a href="javascript:void(0)" onClick={() => store.dispatch(getProducts({ currentPage: page.number, itemPerPage: query.itemPerPage, categoryId: query.categoryId}))}>{page.number}</a></li>
			)}
			<li style={nextBtn} onClick={() => store.dispatch(getProducts({ currentPage: nextNumber, itemPerPage: query.itemPerPage, categoryId: query.categoryId }))}><a href="javascript:void(0)">&raquo;</a></li>
		</ul>
	)
}

Pagination.propTypes = {
	query: PropTypes.object
}

export default Pagination