var express = require('express');

// creating app	
var app = express();

app.use(express.static('public'));

app.listen(3000, function(){
	console.log('Express Server is running on port 3000');
});