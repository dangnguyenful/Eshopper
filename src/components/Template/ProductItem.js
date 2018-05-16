import React from 'react'
import PropTypes from 'prop-types'

const ProductItem = ({ title }) => (
	<li>{title}</li>
)

ProductItem.propTypes = {
	title: PropTypes.string.isRequired
}

export default ProductItem
