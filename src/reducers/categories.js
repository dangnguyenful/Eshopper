import {ActionTypes} from '../constants/ActionTypes'

const initialState = [];

const getAllCategories = function(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.RECEIVE_CATEGORIES:
			return action.categories
		default:
			return state
	}
}

export default getAllCategories