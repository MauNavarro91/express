var express = require('express');
var router = express.Router();
var movieHelper = require('../modules/moviesHelper')

/* GET home page. */


router.post('/:content', function(req, res, next) {
	
	req.params.content;

	movieHelper.search(req.params.content).then(function(peli){
		console.log(peli);
		res.render('search', { title: 'Movies' , pelicula : peli});
		}, function(error){
		res.render('search', { title: 'Movies' , error: error});
		})
});




module.exports = router;
