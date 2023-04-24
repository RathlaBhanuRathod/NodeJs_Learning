
var http=require("http");

var hostname='127.0.0.1';
var port=8000

const server=http.createServer(function(req,res){
    res.statusCode=200
    res.setHeader('Content-type','text/plan')
    res.end("Hello Welcome \nLearn Nodejs\nBhanu Rathod")
})

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})

