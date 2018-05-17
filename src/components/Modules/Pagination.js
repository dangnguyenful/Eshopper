import React from 'react'
import PropTypes from 'prop-types'

const Pagination = ({ currentPage, itemPerPage, totalPage }) => (
	<ul className="pagination">
		<li className="active"><a href="">1</a></li>
		<li><a href="">2</a></li>
		<li><a href="">3</a></li>
		<li><a href="">&raquo;</a></li>
	</ul>
)

Pagination.propTypes = {
	currentPage: PropTypes.string,
	itemPerPage: PropTypes.string,
	totalPage: PropTypes.string
}

export default Pagination