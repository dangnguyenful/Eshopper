const _products = require('./products.json');

const getProducts = function (categoryId, callbackFunc) {
	return callbackFunc({
		products: _products.filter(function (product){
			return product.categoryId === parseInt(categoryId);
		})
	});
}

const getAllProducts = function (callbackFunc) {
	return callbackFunc({
		products: _products
	});
}

module.exports = {
	getProducts,
	getAllProducts
}