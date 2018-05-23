import {combineReducers} from 'redux'
import getAllProducts from './products'
import getAllCategories from './categories'

export default combineReducers({
	getAllProducts,
	getAllCategories
});
