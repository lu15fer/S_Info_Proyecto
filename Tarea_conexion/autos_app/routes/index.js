var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Mazda = require('../models/autos');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AutosApp' });
});

router.get('/mazda', function(req,res,next){
	var infoMazda={};
	infoMazda.pais='Japon';
	infoMazda.sectorVentas = 'Comercial';
	infoMazda.anioFundacion = 1929;
	infoMazda.logo = 'https://www.mazda.mx/siteassets/mazda-mx/logos-new-mazda/mazda-logo-desktop-2.png';
	infoMazda.pagina = 'https://www.mazda.mx/';
	res.render('mazda', infoMazda);
});

router.get('/nissan', function(req,res,next){
	var infoNissan={};
	infoNissan.pais='Japon';
	infoNissan.sectorVentas = 'Comercial';
	infoNissan.anioFundacion = 1933;
	infoNissan.logo = 'https://www.pacocostas.com/images/2017/12/Nissan-logo-51.jpg';
	infoNissan.pagina = 'https://www.nissan.mx/';
	res.render('nissan', infoNissan);
});

router.post('/alta', function(req,res,next){
	//Crear objeto Mongo y hacer insert
	var miMazda = Mazda({
		nombre: req.body.nombre,
		foto: req.body.foto
	});

	miMazda.save(function(err,data){
		if (err){
			console.log('error');
		} else {
			res.render('resultadoAlta', data);
		}
	});

});

module.exports = router;
