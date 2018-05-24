const _products = require('./products.json');

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
}

module.exports = {
	getProducts
}