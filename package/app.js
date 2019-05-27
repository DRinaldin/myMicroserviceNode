'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _bodyParser.urlencoded)({ extended: true }));
app.use((0, _bodyParser.json)());

var port = process.env.PORT || 8080;
var router = (0, _express.Router)();

router.post('/values', async function (request, response) {
	var startDate = new Date();
	var data = request.body;
	var sum = data.value1 + data.value2;
	var endDate = new Date();
	var milliseconds = (endDate.getTime() - startDate.getTime()) / 1000 / 1000;
	var message = {
		"sum": sum,
		"millisecondsElapsed": milliseconds,
		"disclaimer": "API created with Node.js"
	};
	response.status(200);
	response.send(message);
});

app.use('/api', router);

app.listen(port);
console.log('The life begins from ' + port);
//# sourceMappingURL=app.js.map