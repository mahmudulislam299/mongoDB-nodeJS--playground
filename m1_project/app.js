const express = require('express');

// init app & middleware
const app = express();

let portNumber = 3000;
app.listen(portNumber, ()=>
{
	console.log('app listening on port 3000');
})

// routes
app.get('/books', (req, res)=> 
{
	res.json({msg: "welcome to the api"})
})