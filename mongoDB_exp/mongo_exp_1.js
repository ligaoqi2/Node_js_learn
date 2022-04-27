// 与 MySQL 不同的是 MongoDB 会自动创建数据库和集合，
// 所以使用前我们不需要手动去创建

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    var dbo = db.db("runoob");
    // 创建db -> runoob

    var myobj = { name: "菜鸟教程", url: "www.runoob" };

    dbo.collection("site").insertOne(myobj, function(err, res) {
   
      if (err) throw err;
        console.log("文档插入成功");
        db.close();

    });
    
});