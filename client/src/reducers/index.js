import {combineReducers} from 'redux'
import getProducts from './products'
import getAllCategories from './categories'

export default combineReducers({
	getProducts,
	getAllCategories
})
