import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Page/Index'
import Login from '../Page/Login'
const Index = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route exact path='/login' component={Login}/>
		</Switch>
	</main>
);

export default Index;