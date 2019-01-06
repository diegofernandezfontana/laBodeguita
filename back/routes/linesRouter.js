const express= require('express');
const router= express();

const { Line }= require('../db/models/index');

router.get('/', (req,res) => {
	Line.findAll({})
		.then(data => res.send(data))
});

module.exports= router;