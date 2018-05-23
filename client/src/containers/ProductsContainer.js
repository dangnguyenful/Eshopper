import { connect } from 'react-redux'
import ProductsList from '../components/Modules/ProductsList'
import { receiveProducts } from '../actions/products'

const applyFilter = (state) => {
	var allProducts = {products: state.getAllProducts.products};
	if (state.getAllProducts.currentPage && state.getAllProducts.itemPerPage) {
		allProducts.currentPage = state.getAllProducts.currentPage;
		allProducts.itemPerPage = state.getAllProducts.itemPerPage;
	}
	return allProducts;
}

const mapStateToProps = state => (applyFilter(state))

const mapDispatchToProps = dispatch => ({
	receiveProducts: (products, currentPage, itemPerPage) => dispatch(receiveProducts(products, currentPage, itemPerPage))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductsList)