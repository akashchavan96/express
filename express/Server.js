 const express = require ('express');
 const app = express();

 const port = 8080;


 app.listen (port , function () {

    console.log(`Server Started at ${port}`)
 });


 app.get('/getRequest',(req,res)=>{
    res.send("hello world Get Request is Sucessfull")
 });

app.post ('/postRequest',(req,res)=> {
    res.send("Hello world My Post Request is sucessfull")
}); 