var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('login/index');
});

router.post('/', function(request, response){
	
	var user = {
		username: request.body.username,
		password: request.body.password
	};

	userModel.validate(user, function(status){
		if(status){
			response.cookie('username', request.body.username);
			response.redirect('/home');
		}else{
			response.send('invalid username/password');		
		}
	});

});

module.exports = router;


