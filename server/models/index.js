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
          console.log( "data",rows );
        }
      });
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

