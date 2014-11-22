var db = require('../db');




module.exports = {
  messages: {
    get: function (res) {
      // db.connection;
      console.log('connected');
      db.connection.query('SELECT * FROM messages ORDER BY objectId Desc', function(err, rows){
        if(err) {
          console.log('query error')
          throw err;
        } else {
          res.status(200).send({ 'results': rows });
        }
      });
    }, // a function which produces all the messages
    post: function (data) {
      // var currentId;
      db.connection.query("SELECT MAX(objectId) FROM messages", function(err, value) {
        currentId = Number(value[0]['MAX(objectId)']);
        db.connection.query("INSERT INTO messages (objectId,username,time,message,roomname) values (" + (currentId + 1) + ", '" + data.username + "', 111111, '" + data.text + "', '" + data.roomname + "')", function(err, rows) {
            console.log('currentID', currentId);
          // console.log("inserted: ", currentId);
        })
      }) || 0;
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      // db.connection;
      db.connection.query('SELECT * FROM users', function(err, rows) {
        if (err) {
          throw err;
        } else {
          console.log('data', rows);
        }
      });
      // db.connection.end( function(err) {
      //   console.log('connection closed');
      // });
    },
    post: function () {}
  }
};

