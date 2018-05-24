const _products = require('./products.json');

const getProducts = function (categoryId, callbackFunc) {
	var productsArray = _products.filter(function (product){
		return product.categoryId === parseInt(categoryId);
	})
	return callbackFunc({
		products: productsArray
	});
}

module.exports = {
	getProducts
}