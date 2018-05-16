import React from 'react'
import SideBar from './SideBar'
import FeaturesItems from './FeaturesItems'
import CategoryTab from './CategoryTab'
import RecommendedItems from './RecommendedItems'
const Product = () => (
	<section>
		<div className="container">
			<div className="row">
				<div className="col-sm-3">
					<SideBar/>
				</div>
				
				<div className="col-sm-9 padding-right">
					<FeaturesItems/>
					<CategoryTab/>
					<RecommendedItems/>
				</div>
			</div>
		</div>
	</section>
);
export default Product