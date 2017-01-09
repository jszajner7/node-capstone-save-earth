var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:oliver71@ds019816.mlab.com:19816/node_capstone_save_earth');

mongoose.connection.on('error', function(err) {
    console.error('Could not connect.  Error:', err);
});

mongoose.connection.once('open', function() {
   var snippetSchema = mongoose.Schema({
       name: {type: String, unique: true},
       content: String
    });
    

    var Snippet = mongoose.model('Snippet', snippetSchema);
});