import { connect } from 'react-redux'
import ProductsList from '../components/Modules/ProductsList'
import { receiveProducts } from '../actions'

const getVisibleProduct = (state) => {
	var temp = {products: state.getAllProducts.products};
	if (state.getAllProducts.currentPage && state.getAllProducts.itemPerPage) {
		temp.currentPage = state.getAllProducts.currentPage;
		temp.itemPerPage = state.getAllProducts.itemPerPage;
	}
	return temp;
}

const mapStateToProps = state => (getVisibleProduct(state))

const mapDispatchToProps = dispatch => ({
	receiveProducts: (products, currentPage, itemPerPage) => dispatch(receiveProducts(products, currentPage, itemPerPage))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductsList)