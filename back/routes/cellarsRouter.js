const express= require('express');
const router= express();

const { Cellar }= require('../db/models/index');

router.get('/', (req,res) => {
	Cellar.findAll({})
		.then(data => res.send(data))
});

module.exports= router;