import {ActionTypes} from '../constants/ActionTypes'
import shop from '../api/shop'

export const receiveProducts = (products, currentPage, itemPerPage) => ({
	type: ActionTypes.RECEIVE_PRODUCTS,
	products,
	currentPage,
	itemPerPage
})

export const getAllProducts = (currentPage, itemPerPage) => dispatch => {
	shop.getProducts(products => {
		dispatch(receiveProducts(products, currentPage, itemPerPage))
	})
}