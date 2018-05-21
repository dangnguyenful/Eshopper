import React from 'react'
import PriceRange from './PriceRange'
import Promotion from './Promotion'
import BrandsProducts from './BrandsProducts'
import ProductCategories from './ProductCategories'
const SideBar = () => (
	<div className="left-sidebar">
		<h2>Category</h2>
		<ProductCategories/>
		<BrandsProducts/>
		<PriceRange/>
		<Promotion/>
	</div>
);
export default SideBar