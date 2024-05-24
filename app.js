const express =  require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set("view engine","ejs");
var item="";
var items=[];

  app.get("/",function(req,res){

    var today = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

var day = today.toLocaleDateString("en-US", options);

res.render("list",{kindofday:day,newListItem:items});

});

app.post("/",function(req,res){
   item=req.body.newItem;
   items.push(item);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server is up at the port 3000");
});
