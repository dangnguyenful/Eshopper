import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { getAllProducts } from './actions'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

const middleware = [ thunk ];
const rootEl = document.getElementById('root')
middleware.push(createLogger());
const store = createStore(
	reducer,
	applyMiddleware(...middleware)
)
// store.dispatch(getAllProducts())
const render = () => ReactDOM.render(
	<Provider store={store}>
	   	<BrowserRouter>
	    	<App />
	  	</BrowserRouter>
  	</Provider>,
  	rootEl
)

render()
