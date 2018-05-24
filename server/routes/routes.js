const shop = require('../api/shop.js');
const configs = require('../configs/global.js');

const appRouter = function (app) {
	app.get("/", (req, res) => {
	  	res.status(200).json({ message: 'Welcome to API page !' });
	});

	app.get("/products/:categoryId", (req, res) => {
		shop.getProducts(req.params.categoryId, function (data) {
			if (!data)
				res.status(404).json(configs.errorNotFound);
			res.status(200).json(data);
		})
	});

	app.get("/products", (req, res) => {
		shop.getAllProducts(function (data) {
			if (!data)
				res.status(404).json(configs.errorNotFound);
			res.status(200).json(data);
		})
	});
}

module.exports = appRouter;