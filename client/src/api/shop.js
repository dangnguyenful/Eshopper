import globalConfigs from '../configs/global.js'
import apiConfigs from '../configs/api.js'

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
}, timeout || globalConfigs.timeout),
getProducts = (cb, timeout) => {
	callApi(apiConfigs.getProducts, data => {
		cb(data.products)
	}, error => {
		throw Error(error);
	})
},
getCategories = (cb, timeout) => {
	callApi(apiConfigs.getCategories, data => {
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