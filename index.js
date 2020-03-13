const express = require('express')
const app = express()
const port = 3000

app.get('/', function(req, res) {

    var request = require("request");

    var options = {
  method: 'GET',
  url: 'https://coin-flip1.p.rapidapi.com/headstails',
  headers: {
    'x-rapidapi-host': 'coin-flip1.p.rapidapi.com',
    'x-rapidapi-key': '7529849fe1msh7293deb451be0e7p1de87fjsn1674d347ff9e'
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	res.json(body);
});

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
