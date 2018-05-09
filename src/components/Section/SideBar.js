import React from 'react'
import PriceRange from './PriceRange'
import Promotion from './Promotion'
import BrandsProducts from './BrandsProducts'
import CategoryProducts from './CategoryProducts'
const SideBar = () => (
	<div className="left-sidebar">
		<h2>Category</h2>
		<CategoryProducts/>
		<BrandsProducts/>
		<PriceRange/>
		<Promotion/>
	</div>
);
export default SideBar