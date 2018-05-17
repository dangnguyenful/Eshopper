import React from 'react'
import ProductsContainer from '../../containers/ProductsContainer'
const FeaturesItems = () => (
	<div className="features_items">
		<h2 className="title text-center">Features Items</h2>
		<ProductsContainer startPage="3" itemPerPage="12" />
		<ul className="pagination">
			<li className="active"><a href="">1</a></li>
			<li><a href="">2</a></li>
			<li><a href="">3</a></li>
			<li><a href="">&raquo;</a></li>
		</ul>
	</div>
);
export default FeaturesItems