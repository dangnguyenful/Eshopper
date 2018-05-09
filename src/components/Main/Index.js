import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Home from '../Page/Index'
import Login from '../Page/Login'
import NotFound from '../Page/NotFound'
import Contact from '../Page/Contact'

const Index = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route path='/login' component={Login}/>
			<Route path='/contact-us' component={Contact}/>
			<Route path='*' component={NotFound}/>
			{/*<Redirect from={'/'} to={'/not-found'} />*/}
		</Switch>
	</main>
);

export default Index;