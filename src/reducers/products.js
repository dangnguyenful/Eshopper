import {ActionTypes} from '../constants/ActionTypes'

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RECEIVE_PRODUCTS:
      return getAllProducts(state, action);
  }

  return state;
}

function getAllProducts(state, action) {
  const {products} = action;
  return [...state, ...products];
}
