var http = require("http");
//object we need, object that we can send back
function onRequest(request, response){
    console.log("A user made a request."+request.url);
    response.writeHead(200, {"Context-Type":"text/plain"});//200 everything is ok. 404 could not be found
    response.write("Here some data to be returned");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("Server is now running....");