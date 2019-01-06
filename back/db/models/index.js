// const Product = require('./Product');
// const User = require('./User');
// const Order = require('./Order');
// const Grape = require('./Grape');
// const Cellar = require('./Cellar');
// const Line = require('./Line');
// const Price= require('./Precio');
// const Year= require('./Elaboracion');

// // Relaciones entre las diferentes tablas, por ejemplo:
// // tenemos Order como source, y User como target,
// // esto nos crea una tabla intermedia llamada 'user_order' que va contener los userId y 
// // los orderId de los elementos relacionados.

// //	 CELLAR							LINE							PRODUCT							GRAPE
// //				|_ product 				|_ product					 |_ grape					 |_ product
// //				|_ line 					|_ grape
// //				|_ grape


// Cellar.hasMany(Product, { as:'Product' });
// Product.belongsTo(Cellar);

// Cellar.hasMany(Line, { as:'Line' });
// Line.belongsTo(Cellar);

// User.hasMany(Order, { as:'Order' });
// Order.belongsTo(User);

// Line.hasMany(Product, { as:'Product' });
// Product.belongsTo(Line);

// Year.hasMany(Product, { as:'Product' });
// Product.belongsTo(Year);

// Price.hasMany(Product, { as:'Product' });
// Product.belongsTo(Price);

// Product.belongsToMany(Grape, { through:'product_grape' });
// Grape.belongsToMany(Product, { through:'product_grape' });

// Cellar.belongsToMany(Grape, { through:'cellar_grape' });
// Cellar.belongsToMany(Year, { through:'cellar_elab' });


// module.exports = {
//   User,
// 	Order,
// 	Product,
// 	Line,
// 	Grape,
// 	Cellar,
// 	Year,
// 	Price
// };


// FUNCANDO 10:00hs
const Product = require('./Product');
const User = require('./User');
const Order = require('./Order');
const Grape = require('./Grape');
const Cellar = require('./Cellar');
const Line = require('./Line');
const Precio= require('./Precio');
const Elaboracion= require('./Elaboracion');
const Box= require('./Box');

// Relaciones entre las diferentes tablas, por ejemplo:
// tenemos Order como source, y User como target,
// esto nos crea una tabla intermedia llamada 'user_order' que va contener los userId y 
// los orderId de los elementos relacionados.

//	 CELLAR							LINE							PRODUCT							GRAPE
//				|_ product 				|_ product					 |_ grape					 |_ product
//				|_ line 					|_ grape
//				|_ grape


Cellar.hasMany(Product, { as:'Product' });
Product.belongsTo(Cellar);

Cellar.hasMany(Line, { as:'Line' });
Line.belongsTo(Cellar);

User.hasMany(Order, { as:'Order' });
Order.belongsTo(User);

Line.hasMany(Product, { as:'Product' });
Product.belongsTo(Line);

Elaboracion.hasMany(Product, { as:'Product' });
Product.belongsTo(Elaboracion);

Precio.hasMany(Product, { as:'Product' });
Product.belongsTo(Precio);

Box.hasMany(Product, { as:'Product' });
Product.belongsTo(Box);

Product.belongsToMany(Grape, { through:'product_grape' });
Grape.belongsToMany(Product, { through:'product_grape' });

Cellar.belongsToMany(Grape, { through:'cellar_grape' });
Cellar.belongsToMany(Elaboracion, { through:'cellar_elab' });


module.exports = {
  User,
	Order,
	Product,
	Line,
	Grape,
	Cellar,
	Elaboracion,
	Precio,
	Box
};


// FUNCANDO AL 28-11_14:30hs
// const Product = require('./Product');
// const User = require('./User');
// const Order = require('./Order');
// const Grape = require('./Grape');
// const Cellar = require('./Cellar');
// const Line = require('./Line');
// const Price= require('./Precio');
// const Year= require('./Elaboracion');

// // Relaciones entre las diferentes tablas, por ejemplo:
// // tenemos Order como source, y User como target,
// // esto nos crea una tabla intermedia llamada 'user_order' que va contener los userId y 
// // los orderId de los elementos relacionados.

// //	 CELLAR							LINE							PRODUCT							GRAPE
// //				|_ product 				|_ product					 |_ grape					 |_ product
// //				|_ line 					|_ grape
// //				|_ grape


// Cellar.hasMany(Product, { as:'Product' });
// Product.belongsTo(Cellar);

// Cellar.hasMany(Line, { as:'Line' });
// Line.belongsTo(Cellar);

// User.hasMany(Order, { as:'Order' });
// Order.belongsTo(User);

// Line.hasMany(Product, { as:'Product' });
// Product.belongsTo(Line);

// Year.hasMany(Product, { as:'Product' });
// Product.belongsTo(Year);

// Price.hasMany(Product, { as:'Product' });
// Product.belongsTo(Price);

// Product.belongsToMany(Grape, { through:'product_grape' });
// Grape.belongsToMany(Product, { through:'product_grape' });

// Cellar.belongsToMany(Grape, { through:'cellar_grape' });
// Cellar.belongsToMany(Year, { through:'cellar_elab' });


// module.exports = {
//   User,
// 	Order,
// 	Product,
// 	Line,
// 	Grape,
// 	Cellar,
// 	Year,
// 	Price
// };


// FUNCANDO 10:00hs

// const Product = require('./Product');
// const User = require('./User');
// const Order = require('./Order');
// const Grape = require('./Grape');
// const Cellar = require('./Cellar');
// const Line = require('./Line');
// const Precio= require('./Precio');
// const Elaboracion= require('./Elaboracion');

// // Relaciones entre las diferentes tablas, por ejemplo:
// // tenemos Order como source, y User como target,
// // esto nos crea una tabla intermedia llamada 'user_order' que va contener los userId y 
// // los orderId de los elementos relacionados.

// //	 CELLAR							LINE							PRODUCT							GRAPE
// //				|_ product 				|_ product					 |_ grape					 |_ product
// //				|_ line 					|_ grape
// //				|_ grape


// Cellar.hasMany(Product, { as:'Product' });
// Product.belongsTo(Cellar);

// Cellar.hasMany(Line, { as:'Line' });
// Line.belongsTo(Cellar);

// User.hasMany(Order, { as:'Order' });
// Order.belongsTo(User);

// Line.hasMany(Product, { as:'Product' });
// Product.belongsTo(Line);

// Elaboracion.hasMany(Product, { as:'Product' });
// Product.belongsTo(Elaboracion);

// Precio.hasMany(Product, { as:'Product' });
// Product.belongsTo(Precio);

// Product.belongsToMany(Grape, { through:'product_grape' });
// Grape.belongsToMany(Product, { through:'product_grape' });

// Cellar.belongsToMany(Grape, { through:'cellar_grape' });
// Cellar.belongsToMany(Elaboracion, { through:'cellar_elab' });


// module.exports = {
//   User,
// 	Order,
// 	Product,
// 	Line,
// 	Grape,
// 	Cellar,
// 	Elaboracion,
// 	Precio
// };
