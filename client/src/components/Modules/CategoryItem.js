import React from 'react'
import PropTypes from 'prop-types'
import { getProducts } from '../../actions/products'
import store from '../../store'

const CategoryItem = ({ id, title }) => {
	return (
		<div className="panel panel-default">
			<div className="panel-heading">
				<h4 className="panel-title"><a href="javascript:void(0)" onClick={() => store.dispatch(getProducts({categoryId:id}))}>{title}</a></h4>
			</div>
		</div>
	)
}

CategoryItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
}

export default CategoryItem
