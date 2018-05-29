import { connect } from 'react-redux'
import ProductsList from '../components/Modules/ProductsList'
import { receiveProducts } from '../actions/products'

const applyFilter = (state) => {
	var allProducts = {products: state.getProducts.products};
	if (state.getProducts.currentPage && state.getProducts.itemPerPage) {
		allProducts.currentPage = state.getProducts.currentPage;
		allProducts.itemPerPage = state.getProducts.itemPerPage;
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