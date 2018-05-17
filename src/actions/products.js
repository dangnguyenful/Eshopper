import {ActionTypes} from '../constants/ActionTypes'
import shop from '../api/shop'

const receiveProducts = products => ({
	type: ActionTypes.RECEIVE_PRODUCTS,
	products
})

const changePaging = newPage => ({
	type: ActionTypes.CHANGE_PAGING,
	newPage
})

export const getAllProducts = () => dispatch => {
	shop.getProducts(products => {
		dispatch(receiveProducts(products))
	})
}