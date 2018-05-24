const shop = require('../api/shop.js');
const configs = require('../configs/global.js');

const appRouter = function (app) {
	app.get("/api", (req, res) => {
	  	res.status(200).json({ message: configs.welcomeMessage });
	});

	app.get("/api/products", (req, res) => {
		shop.getProducts(req.query, function (data) {
			if (!data)
				res.status(404).json(configs.errorNotFound);
			res.status(200).json(data);
		})
	});

	app.get("/api/categories", (req, res) => {
		shop.getCategories(req.query, function (data) {
			if (!data)
				res.status(404).json(configs.errorNotFound);
			res.status(200).json(data);
		})
	});
}

module.exports = appRouter;