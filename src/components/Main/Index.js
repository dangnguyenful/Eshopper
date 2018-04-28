import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Page/Index'
const Index = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home}/>
		</Switch>
	</main>
);

export default Index;