const _products = require('./products.json');
const _categories = require('./categories.json');
const paging = require('../utilities/paging.js');

const getProducts = function (queryObject, callbackFunc) {
	const categoryId = parseInt(queryObject.categoryId)
	var productsObj = {},
		currentPage = parseInt(queryObject.currentPage),
		itemPerPage = parseInt(queryObject.itemPerPage),
		lastPageNumber = 0,
		totalPage = 0
	if (categoryId) {
		productsObj = Object.assign({}, {
			products: _products.filter(function (product){
				return product.categoryId === parseInt(categoryId);
			}),
			query: {
				categoryId: categoryId
			}
		})
	} else {
		productsObj = Object.assign({}, {
			products: _products
		})
	}
	if (currentPage && itemPerPage) {
		lastPageNumber = (productsObj.products.length % itemPerPage) !== 0 ? 1 : 0
	  	totalPage = Math.floor(productsObj.products.length/itemPerPage) + lastPageNumber
		productsObj = Object.assign(productsObj, {
			products: paging(productsObj.products, currentPage, itemPerPage),
			query: Object.assign(productsObj.query, {
				currentPage: currentPage,
				itemPerPage: itemPerPage,
				totalPage: totalPage
			})
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