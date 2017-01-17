/* STEP 1 - requiering external resourses*/
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');
var app = express();
// 

var co2 = require('./models/co2').co2
var green_house = require('./models/green_house_gas').green_house_gas
var methane = require('./models/methane').methane
app.use(bodyParser.json());
app.use(express.static('public'));




app.get('/co2',function (req,res) {
   co2.find({}).exec(function(error,result) {
       console.log(error);
       console.log(result);
     
      res.send(result); 
      
   });
});

app.get('/green_house_gas',function (req,res) {
    green_house.find({}).exec(function (error,result) {
        console.log(error);
        console.log(result);
        
        res.send(result);
  })
})



app.get('/methane', function (req,res) {
    methane.find({}).exec(function (error,result) {
        console.log(error);
        console.log(result) ;
        
        res.send(result);
        
       })
     
     })
 
  




  







  
    






/* #2 creating objects and constructors*/
// var Storage = {
//   add: function(name) {
//     var item = {
//       name: name,
//       id: this.setId
//     };
//     this.items.push(item);
//     this.setId += 1;
//     return item;
//   }
// };

// var createStorage = function() {
//   var storage = Object.create(Storage);
//   storage.items = [];
//   storage.setId = 1;
//   return storage;
// }

// var storage = createStorage();

// storage.add('total_co2_emissions');

// storage.add('total_green_house_emissions');

// storage.add('total_methane_emissions');

var runServer = function (callback) {
    mongoose.connect('mongodb://admin:oliver71@ds019816.mlab.com:19816/node_capstone_save_earth' || config.DATABASE_URL, function (err) {

        if (err && callback) {
            
            return callback(err);
        }

        app.listen(config.PORT, function () {
            console.log('Listening on localhost:' + config.PORT );
            if (callback) {
                callback();
            }
        });
    });
};

if (require.main === module) {
    runServer(function (err) {
        if (err) {
            console.error(err);
        }
    });
};

// /* #3 api end points */
// app.get('/items', function (req, res) {
//     Item.find(function (err, items) {
//         if (err) {
//             return res.status(500).json({
//                 message: 'Internal Server Error'
//             });
//         }
//         res.status(200).json(items);
//     });
// });
  
// app.post('/items', bodyParser, function(request, response) {
//   if (!('name' in request.body)) {
//     return response.sendStatus(400);
//   }
  
//   var item = storage.add(request.body.name);
//   response.status(201).json(item);
// });

// app.delete('/items/:id/', bodyParser, function(request, response) {
//   if (!request.body) {
//     return response.sendStatus(400);
//   }
  
//   var item = storage.delete(request.params.id);
//   response.status(200).json(item);
// });


// app.put('/items/:id/:name', bodyParser, function(request, response) {
//     //if there is a PUT, but no body, send a 400 error
//     if (!request.body) {
//         return response.sendStatus(400);
//     }
//     var id = request.params.id;
//     var name = request.params.name;
//     //gets the item request name, creates a new object, calls add method, sends response 200 'ok'
//     var item=storage.update(id,name);
//     response.status(200).json(item);
// });

/* #4 server settings*/
exports.app = app;
exports.runServer = runServer;
// app.listen(8888, process.env.IP);
