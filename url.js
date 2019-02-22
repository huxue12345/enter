var http=require('http');
var url=require('url');
var user=require('user');
var fs=require('fs')
console.log(user.message)
http.createServer((req,res)=>{
	if(req.url=='/favicon.ico'){
		return;
	 }
	res.writeHead(200,{'Content-Type':"text/html;charset=UTF-8"})
	var obj=url.parse(req.url,true).query;
	console.log(obj)
	console.log(user.message.username==obj.username)
	console.log(user.message.password==obj.password)
	if(user.message.username==obj.username&&user.message.password==obj.password){
    	fs.readFile('success.html',(err,date)=>{
    		if(err){
    			   console.log(err)
    		       return false;
    		       }else{
    		             res.end(date)
    		             }
    	              })///页面登录成功
       }else{
      	fs.readFile('fail.html',(err,date)=>{
      		if(err){
      			console.log(err);
      			return false;
      		}else{
      			res.end(date)
      		}
      	})
                         }//页面登录失败
   
}).listen(3000)
