import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({ currentPage, itemPerPage, totalPage }) => {
	return (
		<ul className="pagination">
			{currentPage}
			{itemPerPage}
			{totalPage}
			{/*<li className="active"><a href="">1</a></li>
			<li><a href="">2</a></li>
			<li><a href="">3</a></li>
			<li><a href="">&raquo;</a></li>*/}
		</ul>
	)
}

Pagination.propTypes = {
	currentPage: PropTypes.number,
	itemPerPage: PropTypes.number,
	totalPage: PropTypes.number
}

export default Pagination