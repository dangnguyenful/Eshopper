import { connect } from 'react-redux'
import ProductsList from '../components/Modules/ProductsList'

const mapStateToProps = state => (state.getProducts)

export default connect(
	mapStateToProps
)(ProductsList)