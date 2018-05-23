import React from 'react'
import SideBar from '../Sections/SideBar'
import FeaturesItems from '../Sections/FeaturesItems'
const Shop = () => (
	<div>
		<section id="advertisement">
			<div className="container">
				<img src="images/shop/advertisement.jpg" alt="" />
			</div>
		</section>
		<section>
			<div className="container">
				<div className="row">
					<div className="col-sm-3">
						<SideBar/>
					</div>
					
					<div className="col-sm-9 padding-right">
						<FeaturesItems/>
					</div>
				</div>
			</div>
		</section>
	</div>
);
export default Shop