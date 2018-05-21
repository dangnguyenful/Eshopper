import {ActionTypes} from '../constants/ActionTypes'

const initialState = {
	products: [],
	currentPage: 1,
	itemPerPage: 1
};

const getAllProducts = function(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.RECEIVE_PRODUCTS:
			return {
				products: action.products,
				currentPage: action.currentPage,
				itemPerPage: action.itemPerPage
			}
		default:
			return state
	}
}

export default getAllProducts

