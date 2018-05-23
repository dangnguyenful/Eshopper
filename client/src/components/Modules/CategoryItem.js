import React from 'react'
import PropTypes from 'prop-types'

const CategoryItem = ({ title }) => {
	return (
		<div className="panel panel-default">
			<div className="panel-heading">
				<h4 className="panel-title"><a href="/">{title}</a></h4>
			</div>
		</div>
	)
}

CategoryItem.propTypes = {
    title: PropTypes.string.isRequired
}

export default CategoryItem
