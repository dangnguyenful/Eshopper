import {ActionTypes} from '../constants/ActionTypes'
import shop from '../api/shop'

const receiveProducts = (products, currentPage, itemPerPage) => ({
	type: ActionTypes.RECEIVE_PRODUCTS,
	products,
	currentPage,
	itemPerPage
})

const getProducts = (queries) => dispatch => {
	shop.getProducts(queries, products => {
		dispatch(receiveProducts(products))
	})
}

export {
	receiveProducts,
	getProducts
}