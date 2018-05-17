import React from 'react'
import PropTypes from 'prop-types'
import { changePaging } from '../../actions'

const Pagination = ({ currentPage, itemPerPage, totalPage, changePaging }) => {
	var totalObject = [];
	for (var i = 1; i <= totalPage; i++) {
		totalObject.push({
			number: i,
			active: i === currentPage ? true : false
		})
	}
	return (
		<ul className="pagination">
			{totalObject.map(page =>
				<li key={page.number} className={page.active ? 'active' : null} onClick={() => changePaging(page.number)}><a href="javascript:void(0)">{page.number}</a></li>
			)}
			<li><a href="">&raquo;</a></li>
		</ul>
	)
}

Pagination.propTypes = {
	currentPage: PropTypes.number,
	itemPerPage: PropTypes.number,
	totalPage: PropTypes.number,
	changePaging: PropTypes.func
}

export default Pagination