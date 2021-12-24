const express = require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date.js");

const app=express();

let items=[];

let workItems=[];

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");

app.get("/",function(req,res){
    
    let day=date.getDate();
    res.render("list",{
        listTitle:day,
        newitems:items
    });

});

app.post("/",function(req,res){
    let item=req.body.newitem;
    
    if(req.body.list==="Work"){
        workItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item); 
        res.redirect("/");
    }
    
    
    
});

app.get("/work",function(req,res){

    res.render("list",{
        listTitle:"Work List",
        newitems:workItems
    });

});

app.get("/about",function(req,res){
    res.render("about");
})
app.listen(3000,function(){
    console.log("Server at 3000 pot started");
});