import {ActionTypes} from '../constants/ActionTypes'
export const getAllProducts = products => ({
  type: ActionTypes.RECEIVE_PRODUCTS,
  products
})