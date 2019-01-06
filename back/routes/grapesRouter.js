const express= require('express');
const router= express();

var { Grape }= require('../db/models/index');

router.get('/', (req,res) => {
	Grape.findAll({})
		.then(data => res.send(data))
});

module.exports= router;


