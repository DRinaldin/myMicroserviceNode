import express, { Router } from 'express';
import { urlencoded, json } from 'body-parser';

var app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

var port = process.env.PORT || 8080;
var router = Router();

router.post('/values', async function(request, response)
{
	var startDate = new Date();
	var data = request.body;
	var sum = data.value1 + data.value2;
	var endDate   = new Date();
	var milliseconds = ((endDate.getTime() - startDate.getTime()) / 1000)/1000;
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