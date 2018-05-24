import React, {Component} from 'react'
import ProductsContainer from '../../containers/ProductsContainer'
import store from '../../store'
import { getAllProducts } from '../../actions/products'

export default class FeaturesItems extends Component {
	componentDidMount() {
		store.dispatch(getAllProducts())
	}
	render() {
		return (
			<div className="features_items">
				<h2 className="title text-center">Features Items</h2>
				<ProductsContainer currentPage={1} itemPerPage={9} />
			</div>
		)
	}
}