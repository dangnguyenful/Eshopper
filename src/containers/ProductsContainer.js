import { connect } from 'react-redux'
import ProductsList from '../components/Modules/ProductsList'
import { getAllProducts, changePaging } from '../actions'

const mapStateToProps = state => ({
	products: state.getAllProducts
})

const mapDispatchToProps = dispatch => ({
  changePaging: (newPage, itemPerPage) => dispatch(changePaging(newPage, itemPerPage))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ProductsList)