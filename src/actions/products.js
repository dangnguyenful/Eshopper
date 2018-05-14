import {ActionTypes} from '../constants/ActionTypes';

export function getAllProducts(products) {
	return {
		type: ActionTypes.RECEIVE_PRODUCTS,
		products
	};
};
