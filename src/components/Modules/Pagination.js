import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({ currentPage, itemPerPage, totalPage }) => {
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
				<li key={page.number} className={page.active ? 'active' : null}><a href="">{page.number}</a></li>
			)}
			<li><a href="">&raquo;</a></li>
		</ul>
	)
}

Pagination.propTypes = {
	currentPage: PropTypes.number,
	itemPerPage: PropTypes.number,
	totalPage: PropTypes.number
}

export default Pagination