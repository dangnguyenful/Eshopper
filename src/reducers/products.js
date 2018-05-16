import {ActionTypes} from '../constants/ActionTypes'

const initialState = [];

const getAllProducts = function(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.RECEIVE_PRODUCTS:
			return action.products;
		default:
			return state
	}
}

export default getAllProducts

