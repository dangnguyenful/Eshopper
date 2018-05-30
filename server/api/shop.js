const _products = require('./products.json');
const _categories = require('./categories.json');
const paging = require('../utilities/paging.js');

const getProducts = function (queryObject, callbackFunc) {
	const categoryId = queryObject.categoryId
	var productsObj = {},
		currentPage = parseInt(queryObject.currentPage),
		itemPerPage = parseInt(queryObject.itemPerPage)
	if (categoryId) {
		productsObj = Object.assign({}, {
			products: _products.filter(function (product){
				return product.categoryId === parseInt(categoryId);
			})
		})
	} else {
		productsObj = Object.assign({}, {
			products: _products
		})
	}
	
	if (currentPage && itemPerPage) {
		productsObj = Object.assign(productsObj, {
			products: paging(productsObj.products, currentPage, itemPerPage),
			currentPage: currentPage,
			itemPerPage: itemPerPage
		})
	}

	return callbackFunc(productsObj)
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