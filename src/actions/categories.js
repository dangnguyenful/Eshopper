import {ActionTypes} from '../constants/ActionTypes'
import shop from '../api/shop'

const receiveCategories = (categories) => ({
	type: ActionTypes.RECEIVE_CATEGORIES
})

const getAllCategories = dispatch => {
	shop.getCategories(categories => {
		dispatch(receiveCategories(categories))
	})
}

export {
	receiveCategories,
	getAllCategories
}