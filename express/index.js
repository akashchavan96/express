const express = require('express');
const app = express();



let todos = [{
   "id": 1,

   "Name": "Akash"

},
{
   "id": 2,
   "Name": "Rohit"
}
];

let port = 9090;

app.use(express.json())




app.get('/get', (req, res) => {
   res.send(todos)
   //    console.log('todos')
});

app.post('/add', (req, res) => {


   let userData = req.body;

   todos.push(userData);
   res.status(201).json(userData);



})


app.put('/update/:id', (req, res) => {

   let found = todos.find(function (item) {

      return item.id === parseInt(req.params.id);

   });



   if (found) {

      let updated = {

         id: found.id,

         Name: req.body.Name, // set value of `title` get from req


      };




      let targetIndex = todos.indexOf(found);



      // replace object from data list with `updated` object

      todos.splice(targetIndex, 1, updated);





      res.json(updated);



   }






})

app.delete("/delete:id", (req, res) => {

   let found = todos.find(function (item) {

      return item.id === parseInt(req.params.id);

   });


   if (found) {


      let targetIndex = todos.indexOf(found);

      todos.splice(targetIndex, 1);
      res.json(found);


   }
})


app.listen(port, function () {

   console.log(`Server Started at ${port}`)
});