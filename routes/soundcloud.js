var request = require('request');
var sc = require('soundclouder');

sc.init('9529333ca7e7b723cf10d9c4efb00712');

exports.home = function(req, res){
	// get current queue data
	//res.render('soundcloud', { title: 'Soundcloud' }); // pass as a var

	var searchTerm = "pompeii";

	sc.get('/tracks', { q: searchTerm }, function(tracks, error) {
		console.log(tracks + "this is track console");
		console.log(error);
		res.render('soundcloud', { sc_url: tracks[0].uri + "&auto_play=true" });
	});
};

exports.home_post_handler = function(req, res){
	var search = req.body.search;
	req.session.search = search;
	var id = req.body.id;

	if (search != ''){
		console.log(req.body.search + "req.body");
		console.log(req.session.search + "req.session");
		res.redirect('/user/search')
	} else {
		// remove id from queue
	}
}