import configs from '../configs/global.js'

const callApi = (url, successFunc, failFunc, timeout) => setTimeout(() => {
	fetch(url)
		.then(res => res.json())
		.then(
			(result) => {
				successFunc(result)
			},
			(error) => {
			  	throw Error(error);
			}
		)
}, timeout || configs.timeout),
getProducts = (cb, timeout) => {
	callApi('/api/products', data => {
		cb(data.products)
	}, error => {
		throw Error(error);
	})
},
getCategories = (cb, timeout) => {
	callApi('/api/categories', data => {
		cb(data.categories)
	}, error => {
		throw Error(error);
	})
}

export default {
	callApi,
	getProducts,
	getCategories
}