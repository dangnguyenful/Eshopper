import { connect } from 'react-redux'
import ProductsList from '../components/Modules/ProductsList'

const mapStateToProps = state => ({
	products: state.getAllProducts.products,
	itemPerPage: state.getAllProducts.itemPerPage,
	currentPage: state.getAllProducts.currentPage,
	totalPage: state.getAllProducts.totalPage
})

export default connect(
	mapStateToProps
)(ProductsList)