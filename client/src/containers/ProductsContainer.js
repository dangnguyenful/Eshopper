import { connect } from 'react-redux'
import ProductsList from '../components/Modules/ProductsList'
import { receiveProducts } from '../actions/products'

const mapStateToProps = state => (state.getProducts)

const mapDispatchToProps = dispatch => ({
	receiveProducts: (products, currentPage, itemPerPage) => dispatch(receiveProducts(products, currentPage, itemPerPage))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductsList)