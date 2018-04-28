import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'

const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
   	<BrowserRouter>
    	<App />
  	</BrowserRouter>,
  	rootEl
)

render()
