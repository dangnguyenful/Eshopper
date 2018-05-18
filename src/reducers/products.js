import {ActionTypes} from '../constants/ActionTypes'
import paging from '../utilities/paging'

const initialState = {
	products: [],
	currentPage: 1,
	itemPerPage: 1
};

const getAllProducts = function(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.RECEIVE_PRODUCTS:
			// console.log('---')
			// console.log({
			// 	products: action.products,
			// 	currentPage: action.currentPage,
			// 	itemPerPage: action.itemPerPage
			// })
			// console.log('---')
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

