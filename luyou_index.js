var server = require("./luyou_server");
var router = require("./luyou_router");
 
server.start(router.route);