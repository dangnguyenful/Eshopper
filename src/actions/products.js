import {ActionTypes} from '../constants/ActionTypes'
import shop from '../api/shop'

const receiveProducts = products => ({
	type: ActionTypes.RECEIVE_PRODUCTS,
	products
})

export const changePaging = (newPage, itemPerPage) => ({
	type: ActionTypes.CHANGE_PAGING,
	newPage,
	itemPerPage
})

export const getAllProducts = () => dispatch => {
	shop.getProducts(products => {
		dispatch(receiveProducts(products))
	})
}