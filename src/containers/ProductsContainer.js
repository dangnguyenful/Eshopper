import { connect } from 'react-redux'
import ProductsList from '../components/Modules/ProductsList'
import { getAllProducts, receiveProducts } from '../actions'

const getVisibleProduct = (state) => {
	console.log(state)
  	return state.getAllProducts
}

const mapStateToProps = state => ({
	products: getVisibleProduct(state)
})

const mapDispatchToProps = dispatch => ({
	receiveProducts: (products, currentPage, itemPerPage) => dispatch(receiveProducts(products, currentPage, itemPerPage))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductsList)