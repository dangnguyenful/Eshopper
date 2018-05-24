import _products from './products.json'
import _categories from './categories.json'

const TIMEOUT = 100

export default {
	getProducts: (cb, timeout) => setTimeout(() => {
		fetch("/api/products")
			.then(res => res.json())
			.then(
				(result) => {
				  	cb(result.products)
				},
				(error) => {
				  	throw Error(error);
				}
			)
	}, timeout || TIMEOUT),
	getCategories: (cb, timeout) => setTimeout(() => cb(_categories), timeout || TIMEOUT)
}