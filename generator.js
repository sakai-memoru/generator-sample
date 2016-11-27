var fetch = require('node-fetch');
var co = require('co');

co(function *(){
	var URL = 'http://jsonplaceholder.typicode.com/posts/1/comments';
	var response = yield fetch(URL);
	var post = yield response.json();
	console.log(post)
	
}).catch(console.dir);
