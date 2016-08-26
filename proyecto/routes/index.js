var express = require('express');
var router = express.Router();
var movieHelper = require('../modules/moviesHelper')

/* GET home page. */

router.post('/', function(req, res, next){

	movieHelper.search({query:req.body.title}).then(function(peli){
		console.log(peli);
		res.render('search', { peli:resp.Search});
		}, function(error){
		res.render('search', { title: 'Movies' , error: error});
		})
});

router.get('/', function(req, res, next) {
	

	movieHelper.getRandomSearch().then(function(peli){
		console.log(peli);
		res.render('index', { title: 'Movies' , peliculas : peli});
		}, function(error){
		res.render('index', { title: 'Movies' , error: error});
		})
});


router.get('/:id', function(req, res, next) {
	
	req.params.id;

	movieHelper.getDetail(req.params.id).then(function(peli){
		console.log(peli);
		res.render('detail', { title: 'Movies' , pelicula : peli});
		}, function(error){
		res.render('detail', { title: 'Movies' , error: error});
		})
});






module.exports = router;
