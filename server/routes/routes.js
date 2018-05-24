const shop = require('../api/shop.js');
const globalConfigs = require('../configs/global.js');
const apiConfigs = require('../configs/api.js');

const appRouter = function (app) {
	app.get(apiConfigs.getHomePage, (req, res) => {
	  	res.status(200).json({ message: globalConfigs.welcomeMessage });
	});

	app.get(apiConfigs.getProducts, (req, res) => {
		shop.getProducts(req.query, function (data) {
			if (!data)
				res.status(404).json(globalConfigs.errorNotFound);
			res.status(200).json(data);
		})
	});

	app.get(apiConfigs.getCategories, (req, res) => {
		shop.getCategories(req.query, function (data) {
			if (!data)
				res.status(404).json(globalConfigs.errorNotFound);
			res.status(200).json(data);
		})
	});
}

module.exports = appRouter;