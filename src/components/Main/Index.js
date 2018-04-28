import React, { Component } from 'react'
import { Switch, Route, Redirect, DefaultRoute } from 'react-router-dom'
import Home from '../Page/Index'
import Login from '../Page/Login'
import NotFound from '../Page/NotFound'
const Index = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route path='/login' component={Login}/>
			<Route path='/not-found' component={NotFound}/>
			<Redirect from={'/'} to={'/not-found'} />
		</Switch>
	</main>
);

export default Index;