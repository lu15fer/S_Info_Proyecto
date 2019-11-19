var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Mazda = require('../models/autos');

router.get('/mazda', function(req,res,next){

	var data = {autos:[]};
	var auto = {};
/*
	auto.nombre = "Mazda 3";
	auto.foto = "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/l/RT_V_da65b0a6706742f29cb1d394ce06d85a.jpg";
	data.autos.push(auto);
	
	auto = null;
	auto ={};

	auto.nombre = "Mazda 6";
	auto.foto = "https://www.mazda.mx/siteassets/mazda-mx/mycos-2020/mazda6/vlp/360/gris-titanio/mazda-6-vehiculos-exterior-gris-titanio-17.jpg";
	data.autos.push(auto);

	auto = null;	
	auto ={};

	auto.nombre = "Mazda cx-6";
	auto.foto = "https://i2.wp.com/bestluxurycars.org/wp-content/uploads/2017/12/2019-Mazda-CX-6.png?fit=625%2C378&ssl=1";
	data.autos.push(auto);

	auto = null;	
	auto ={};

	auto.nombre = "Mazda cx-6";
	auto.foto = "https://i2.wp.com/bestluxurycars.org/wp-content/uploads/2017/12/2019-Mazda-CX-6.png?fit=625%2C378&ssl=1";
	data.autos.push(auto);

	auto = null;	
	auto ={};

	auto.nombre = "Mazda cx-6";
	auto.foto = "https://i2.wp.com/bestluxurycars.org/wp-content/uploads/2017/12/2019-Mazda-CX-6.png?fit=625%2C378&ssl=1";
	data.autos.push(auto);

	auto = null;	
	auto ={};

	auto.nombre = "Mazda cx-6";
	auto.foto = "https://i2.wp.com/bestluxurycars.org/wp-content/uploads/2017/12/2019-Mazda-CX-6.png?fit=625%2C378&ssl=1";
	data.autos.push(auto);

*/

	Mazda.find({},function(err,data){

	//console.log(data);

	var x={autos:data};

	res.render("./galerias/mazda", x);
});

});

module.exports = router;