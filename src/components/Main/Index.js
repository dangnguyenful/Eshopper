import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Page/Index'
import NotFound from '../Page/NotFound'
import Login from '../Page/Login'
import Cart from '../Page/Cart'
import Shop from '../Page/Shop'
import Checkout from '../Page/Checkout'
import Contact from '../Page/Contact'
import Product from '../Page/Product'
import Blog from '../Page/Blog'
import BlogSingle from '../Page/BlogSingle'

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