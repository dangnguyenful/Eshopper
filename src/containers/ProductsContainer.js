import { connect } from 'react-redux'
import ProductsList from '../components/Modules/ProductsList'

const mapStateToProps = state => ({
	products: state.getAllProducts
})

export default connect(
	mapStateToProps
)(ProductsList)