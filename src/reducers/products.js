import {ActionTypes} from '../constants/ActionTypes'

const initialState = [];

export const getAllProducts = function(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.RECEIVE_PRODUCTS:
			return [{title:'c'},{title:'d'}];
		default:
			return state
	}
}

export default getAllProducts

