var wechat = require('wechat');
var defaultConfig = require('../config/default');
module.exports = function(app) {
	app.get('/signup', function(req, res) {
		res.render('signup');
	});
	
	app.get('/wechat', wechat(defaultConfig.wechat, function(req, res, next) {
		var message = req.weixin;
		console.log(message);
	});
}