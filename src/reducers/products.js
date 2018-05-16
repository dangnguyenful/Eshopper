import {ActionTypes} from '../constants/ActionTypes'
import shop from '../api/shop'

const initialState = [];

export const getAllProducts = function(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.RECEIVE_PRODUCTS:
			return action.products;
		default:
			return state
	}
}

export default getAllProducts

