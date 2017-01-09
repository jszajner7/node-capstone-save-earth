var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://jeffszajner:oliver71@ds019816.mlab.com:19816/node_capstone_save_earth' , function(err, db) {
    if (err) {
        console.error(err);
        db.close();
        return;
    }

    var collection = db.collection('snippets');

    var create = function(name, content) {
        db.close();
    };

    var read = function(name) {
        db.close();
    };

    var update = function(name, content) {
        db.close();
    };

    var del = function(name, content) {
        db.close();
    };

    var main = function() {
        if (process.argv[2] == 'create') {
            create(process.argv[3], process.argv[4]);
        }
        else if (process.argv[2] == 'read') {
            read(process.argv[3]);
        }
        else if (process.argv[2] == 'update') {
            update(process.argv[3], process.argv[4]);
        }
        else if (process.argv[2] == 'delete') {
            del(process.argv[3]);
        }
        else {
            console.error('Command not recognized');
            db.close();
        }
    };

    main();
});




//Create//

var create = function(name, content) {
    var snippet = {
        name: name,
        content: content
    };
    Snippet.create(snippet, function(err, snippet) {
        if (err || !snippet) {
            console.error("Could not create snippet", name);
            mongoose.disconnect();
            return;
        }
        console.log("Created snippet", snippet.name);
        mongoose.disconnect();
        
        //Read//
        
        var read = function(name) {
    var query = {
        name: name
    };
    
    collection.findOne(query, function(err, snippet) {
        if (!snippet || err) {
            console.error("Could not read snippet", name);
            db.close();
            return;
        }
        console.log("Read snippet", snippet.name);
        console.log(snippet.content);
        db.close();
    });
};

//Update//

var update = function(name, content) {
    var query = {
        name: name
    };

    var update = {
        $set: {content: content}
    };
    

    collection.findAndModify(query, null, update, function(err, result) {
        var snippet = result.value;
        if (!snippet || err) {
            console.error("Could not update snippet", name);
            db.close();
            return;
        }
        console.log("Updated snippet", snippet.name);
        db.close();
    });
};

//Delete//

var del = function(name, content) {
    var query = {
        name: name
    };
    collection.findAndRemove(query, function(err, result) {
        var snippet = result.value;
        if (!snippet || err) {
            console.error("Could not delete snippet", name);
            db.close();
            return;
        }
        console.log("Deleted snippet", snippet.name);
        db.close();
    });
};