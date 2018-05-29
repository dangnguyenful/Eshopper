import {ActionTypes} from '../constants/ActionTypes'
import shop from '../api/shop'

const receiveProducts = (products, query) => ({
	type: ActionTypes.RECEIVE_PRODUCTS,
	products,
	query
})

const getProducts = (query={}) => dispatch => {
	shop.getProducts(query, products => {
		dispatch(receiveProducts(products, query))
	})
}

export {
	receiveProducts,
	getProducts
}