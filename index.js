const { response, request } = require("express");
const express = require("express");
const app = express();
const port = 8000;
app.listen(port);

app.get("/", (request, response) => {
  response.send("welcome user");
});

app.get("/test", (request, response) => {
  response.send("success");
});

app.get("/names", (request, response) => {
  let myNames = ["a", "b", "c", "d", "e"];
  response.send(myNames);
});
//8
app.get("/numbers", (request, response) => {
  let numbers = [
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
    Math.floor(Math.random() * 100),
  ];
  response.send(numbers);
});

// //9
// app.get('/randomNumbers',(request, response)=>{
//     let arr = [];
//     let rnd =Math.floor(Math.random() *100)
   
// })

//10
// app.get('/numbers/:index',(req,res)=>{
//     let arrRnd=[
//         Math.floor(Math.random()*100),
//         Math.floor(Math.random()*100),
//         Math.floor(Math.random()*100),
//         Math.floor(Math.random()*100),
//         Math.floor(Math.random()*100),
//         Math.floor(Math.random()*100),
//         Math.floor(Math.random()*100),
//         Math.floor(Math.random()*100),
//         Math.floor(Math.random()*100),
//         Math.floor(Math.random()*100),
//     ];
//     const userIndex=req.params.index;

    
// });

// app.get('/:id',(request,response)=>{
//     const userId=request.params.id;
//     response.send(userId);
// })
