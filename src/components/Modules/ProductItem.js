import React from 'react'
import PropTypes from 'prop-types'

const ProductItem = ({ title, price, image}) => {
	let inlineCss = {
		minHeight: '380px'
	}
	return (
		<div className="col-sm-4">
			<div className="product-image-wrapper">
				<div className="single-products">
						<div className="productinfo text-center" style={inlineCss}>
							<img src={image} alt="" />
							<h2>${price}</h2>
							<p>{title}</p>
							<a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
						</div>
						<div className="product-overlay">
							<div className="overlay-content">
								<h2>${price}</h2>
								<p>{title}</p>
								<a href="/" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</a>
							</div>
						</div>
				</div>
				<div className="choose">
					<ul className="nav nav-pills nav-justified">
						<li><a href="/"><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
						<li><a href="/"><i className="fa fa-plus-square"></i>Add to compare</a></li>
					</ul>
				</div>
			</div>
		</div>
	)
}

ProductItem.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
}

export default ProductItem
