import React, {Component} from 'react'
import PriceRange from './PriceRange'
import Promotion from './Promotion'
import BrandsProducts from './BrandsProducts'
import ProductCategories from './ProductCategories'
import store from '../../store'
import { getAllCategories } from '../../actions/categories'

export default class SideBar extends Component {
	componentDidMount() {
		store.dispatch(getAllCategories())
	}
	render() {
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
}
