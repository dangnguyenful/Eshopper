import {ActionTypes} from '../constants/ActionTypes'
import paging from '../utilities/paging'

const initialState = [];

const getAllProducts = function(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.RECEIVE_PRODUCTS:
			return action.products
		case ActionTypes.CHANGE_PAGING:
			return action.products
		default:
			return state
	}
}

export default getAllProducts

