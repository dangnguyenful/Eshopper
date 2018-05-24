import React from 'react'
import PriceRange from './PriceRange'
import Promotion from './Promotion'
import BrandsProducts from './BrandsProducts'
import ProductCategories from './ProductCategories'
import store from '../../store'
import { getAllCategories } from '../../actions/categories'

const SideBar = () => {
	store.dispatch(getAllCategories())
	return (
		<div className="left-sidebar">
			<h2>Category</h2>
			<ProductCategories/>
			<BrandsProducts/>
			<PriceRange/>
			<Promotion/>
		</div>
	)
}

export default SideBar