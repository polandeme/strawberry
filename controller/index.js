var wechat = require('wechat');
var defaultConfig = require('../config/default');
var API = wechat.API;
var api = new API(defaultConfig.wechat.config.appid, defaultConfig.wechat.config.appsecret);
module.exports = function(app) {
	app.get('/signup', function(req, res) {
		res.render('signup');
	});
	
	app.get('/wechat', wechat(defaultConfig.wechat.config, function(req, res, next) {
//		api.createMenu(defaultConfig.wechat.menu, function(err, result) {
//			console.log(result);
//		})
	}));
	
	app.post('/wechat', wechat(defaultConfig.wechat.config, function(req, res, next) {
		var message = req.weixin;
		res.reply([
			{
				title: "你好时光",
				description: "你好时光",
				url: "http://slowlytime.com/signup"
			}
		]);
	}));
}