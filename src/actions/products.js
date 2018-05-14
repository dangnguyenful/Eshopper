import {ActionTypes} from '../constants/ActionTypes'
import shop from '../api/shop'

const receiveProducts = products => ({
	type: ActionTypes.RECEIVE_PRODUCTS,
	products
})

export const getAllProducts = () => dispatch => {
	shop.getProducts(products => {
		dispatch(receiveProducts(products))
	})
}