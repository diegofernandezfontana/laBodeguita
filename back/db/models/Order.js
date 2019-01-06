var db = require('../index');
const Sequelize = require('sequelize');

const Order = db.define('order', {
    status: {
        type: Sequelize.ENUM('procesando', "completado"), //PREGUNTAR
    },
    date:{
        type: Sequelize.STRING
    },
    total:{
        type: Sequelize.INTEGER
    },
    address:{
        type: Sequelize.STRING,
    },
    email:{
        type : Sequelize.STRING	//REVEER SI VA EL EMAIL
    },
    order:{
        type: Sequelize.TEXT('long')
    }
});

module.exports = Order;
