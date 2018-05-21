import { connect } from 'react-redux'
import CategoriesList from '../components/Modules/CategoriesList'

const applyFilter = (state) => {
	return state.getAllCategories
}

const mapStateToProps = state => ({categories: applyFilter(state)})

export default connect(
	mapStateToProps
)(CategoriesList)