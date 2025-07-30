var express=require('express');
const app = express();

//default port for http
var port=80;

app.use(express.static('frontend'));
app.listen(port, function(){
    console.log("server is running");
});
