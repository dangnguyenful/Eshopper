import thunk from 'redux-thunk'
import reducer from './reducers'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { initFunction } from './actions'

const middleware = [ thunk ];
middleware.push(createLogger());
const store = createStore(
	reducer,
	applyMiddleware(...middleware)
)
store.dispatch(initFunction())

export default store