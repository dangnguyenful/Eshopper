import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
	<Provider store={store}>
	   	<BrowserRouter>
	    	<App />
	  	</BrowserRouter>
  	</Provider>,
  	rootEl
)

render()
