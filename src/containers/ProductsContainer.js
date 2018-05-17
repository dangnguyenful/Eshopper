import { connect } from 'react-redux'
import ProductsList from '../components/Modules/ProductsList'
import { getAllProducts } from '../actions'

const mapStateToProps = state => ({
	products: state.getAllProducts
})

export default connect(
	mapStateToProps
)(ProductsList)