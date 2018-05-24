import {ActionTypes} from '../constants/ActionTypes'
import shop from '../api/shop'

const receiveProducts = (products, currentPage, itemPerPage) => ({
	type: ActionTypes.RECEIVE_PRODUCTS,
	products,
	currentPage,
	itemPerPage
})

const getAllProducts = () => dispatch => {
	shop.getProducts(products => {
		dispatch(receiveProducts(products))
	})
}

export {
	receiveProducts,
	getAllProducts
}