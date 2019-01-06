/*
Modelo para la ubicación de las cajas
La unidad es la caja numerada (id alfanumérico)
'Este vino, en este lugar con X stock'
-Hacer vista materializada: el producto en un query
*/

const Sequelize= require('sequelize');
const db= require('../index');

const Box= db.define('box', {
	box: {
		type:	Sequelize.STRING
	},
	quantity: {
		type: Sequelize.INTEGER
	}
});

module.exports= Box;