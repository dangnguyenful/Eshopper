const _products = require('./products.json');
const _categories = require('./categories.json');

const getProducts = function (queryObject, callbackFunc) {
	const categoryId = queryObject.categoryId;
	if (categoryId)
		return callbackFunc({
			products: _products.filter(function (product){
				return product.categoryId === parseInt(categoryId);
			})
		});
	return callbackFunc({
		products: _products
	});
}, 
getCategories = function (queryObject, callbackFunc) {
	return callbackFunc({
		categories: _categories
	});
}


module.exports = {
	getProducts,
	getCategories
}