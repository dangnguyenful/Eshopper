import { connect } from 'react-redux'
import ProductsList from '../components/Modules/ProductsList'
const aaa = state => {
	// console.log(state)
	return state.getProducts
}
const mapStateToProps = state => (aaa(state))

export default connect(
	mapStateToProps
)(ProductsList)