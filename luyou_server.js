var http = require("http");
var url = require("url");
var router = require("./luyou_router");
 
function start() {
  function onRequest(request, response) {
    console.log("request.url is " + request.url)
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    router.route(pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }
 
  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}
 
exports.start = start;