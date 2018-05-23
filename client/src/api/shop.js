import _products from './products.json'
import _categories from './categories.json'

const TIMEOUT = 100

export default {
	getProducts: (cb, timeout) => setTimeout(() => cb(_products), timeout || TIMEOUT),
	getCategories: (cb, timeout) => setTimeout(() => cb(_categories), timeout || TIMEOUT)
}