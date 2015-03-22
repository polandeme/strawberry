var express = require('express');

var routes = require('./controller');

var path = require('path');

var http = require('http');

var bodyParser = require('body-parser');

var lessMiddleware = require('less-middleware');

var httpProxy = require('http-proxy');

var defaultConfig = require('./config/default');

var ejs = require('ejs');

var app = express();

var proxyApi = httpProxy.createProxyServer({
    target: defaultConfig.urlBackend
});

app.use(function(req, res, next) {
	if (req.url.indexOf('/api/v1') === 0) {
		proxyApi.web(req, res, {}, next);
	} else {
		next();
	}
});
app.set('port', process.env.PORT || 4000);

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(bodyParser());

app.use(lessMiddleware(__dirname + '/assets'));
app.use(express.static(__dirname + '/assets'));

http.createServer(app).listen(app.get('port'), function() {
	console.log('application run on port', app.get('port'));
});


routes(app);

