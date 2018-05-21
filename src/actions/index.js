import { getAllProducts, receiveProducts } from './products'
import { getAllCategories } from './categories'

const initFunction = () => dispatch => {
	getAllCategories(dispatch)
	getAllProducts(dispatch)
}

export {
	initFunction
}