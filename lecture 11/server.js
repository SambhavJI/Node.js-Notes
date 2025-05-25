//Creating an http server using http module of node.js
const http = require("http")

const server = http.createServer(function(req,res){
    res.end("hello world !");

    if(req.url==="/sambhav"){
        res.end("This is sambhav trivedi....");
    }
});

server.listen(3000);

