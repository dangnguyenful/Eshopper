import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Pages/Index'
import NotFound from '../Pages/NotFound'
import Login from '../Pages/Login'
import Cart from '../Pages/Cart'
import Shop from '../Pages/Shop'
import Checkout from '../Pages/Checkout'
import Contact from '../Pages/Contact'
import Product from '../Pages/Product'
import Blog from '../Pages/Blog'
import BlogSingle from '../Pages/BlogSingle'

const Index = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home}/>
			<Route path='/login' component={Login}/>
			<Route path='/cart' component={Cart}/>
			<Route path='/shop' component={Shop}/>
			<Route path='/checkout' component={Checkout}/>
			<Route path='/contact-us' component={Contact}/>
			<Route path='/product-details' component={Product}/>
			<Route path='/blog' component={Blog}/>
			<Route path='/blog-single' component={BlogSingle}/>
			<Route path='*' component={NotFound}/>
		</Switch>
	</main>
);

export default Index;