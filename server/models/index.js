var db = require('../db');




module.exports = {
  messages: {
    get: function () {
      db.connection.connect();
      console.log('connected');
      db.connection.query('SELECT * FROM messages', function(err, rows){
        if(err) {
          console.log('query error')
          throw err;
        } else {
          console.log( "data", rows );
        }
      });
      db.connection.end(function(err){
        // Do something after the connection is gracefully terminated.
        console.log('connection closed');
      });
    }, // a function which produces all the messages
    post: function () {
      db.connection.connect();

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      db.connection.connect();
      db.connection.query('SELECT * FROM users', function(err, rows) {
        if (err) {
          throw err;
        } else {
          console.log('data', rows);
        }
      });
      db.connection.end( function(err) {
        console.log('connection closed');
      });
    },
    post: function () {}
  }
};

