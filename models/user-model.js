var db = require('./db');
var mysql = require('mysql');
module.exports = {

	getById: function(id, callback){

			var sql = "select * from user where id="+id;
			db.getResults(sql, function(result){
				if(result.length > 0 ){
					callback(result[0]);
				}else{
					callback([]);
				}
			});
	},
	validate: function(user, callback){
		var sql ="select * from employee where username='"+user.username+"' and password='"+user.password+"'";
		db.getResults(sql, function(result){
				console.log(sql);
			if(result.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});	
	},
	getAll: function(callback){
		var sql = "select employee from user";
		
		db.getResults(sql, function(results){
			
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});	
	},
	insert: function(user, callback){

		var sql ="insert into employee values('', '"+ user.username+"', '"+user.password+"')";
		db.execute(sql, function(status){
			callback(status);
		});
	},
	update: function(user, callback){
		var sql ="update user set employee='"+ user.username+"', password='"+user.password+"' where id="+user.id;
		
		console.log(sql);

		db.execute(sql, function(status){
			callback(status);
		});
	},
	delete: function(id, callback){
		var sql = "delete from employee where id="+id;
		db.execute(sql, function(status){
			callback(status);
		});
	}
}



