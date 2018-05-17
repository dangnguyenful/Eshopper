import {ActionTypes} from '../constants/ActionTypes'

const initialState = {
	products: [],
	currentPage: 1,
	itemPerPage: 9
};

const getAllProducts = function(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.RECEIVE_PRODUCTS:
			return {
				products: action.products,
				currentPage: state.currentPage,
				itemPerPage: state.itemPerPage,
				totalPage: action.products.length/state.itemPerPage
			};
		default:
			return state
	}
}

export default getAllProducts

