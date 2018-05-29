import {ActionTypes} from '../constants/ActionTypes'

const initialState = {
	products: [],
	query: {}
};

const getProducts = function(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.RECEIVE_PRODUCTS:
			return {
				...state,
				products: action.products,
				query: action.query
			}
		default:
			return state
	}
}

export default getProducts
