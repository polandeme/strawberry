var wechat = require('wechat');
var defaultConfig = require('../config/default');
var API = wechat.API;
var api = new API(defaultConfig.wechat.config.appid, defaultConfig.wechat.config.appsecret);
module.exports = function(app) {
	app.get('/signup', function(req, res) {
		res.render('signup');
	});
	
	app.get('/wechat', wechat('wechatToken', function(req, res, next) {
		api.createMenu(defaultConfig.wechat.menu, function(err, result) {
			console.log(result);
		})
		var message = req.weixin;
		console.log(message);
	}));
}