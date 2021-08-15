const express = require("express")
var app = express()
const path =require('path')
function timeout(req,res,next){
    var d = new Date();
    var today=d.getDay();
    var hours=d.getHours();
    

    (1 <= today && today <= 8 && 9 <= hours && hours <= 17)? next(): res.send('<h1>we are working from 9 to 17</h1>')
}
app.use(timeout)
const fs=require('fs')
app.get("/", (req, res) => {
   fs.readFile("./components/Home.html","utf-8",(err,data)=>{
       err? console.log(err) : res.send(data)
   });
  });
  app.get("/OurServices", (req, res) => {
    fs.readFile("./components/OurServices.html","utf-8",(err,data)=>{
        err? console.log(err) : res.send(data)
    });
   });
   app.get("/ContactUs", (req, res) => {
    fs.readFile("./components/ContactUs.html","utf-8",(err,data)=>{
        err? console.log(err) : res.send(data)
    });
   });
   app.use(express.static(path.join(__dirname,'components')));
const PORT= process.env.PORT || 5000
const server = app.listen(PORT,(err) => err ? console.log(err): console.log(`server running on PORT ${PORT}`))