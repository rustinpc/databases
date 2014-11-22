var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      req.on('data', function(chunk) {
        data += chunk;
      });

      req.on('end', function() {
        console.log(data);
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get();
    },
    post: function (req, res) {
      req.on('data', function(chunk) {
        data += chunk;
      });

      req.on('end', function() {
        console.log(data);
      });
    }
  }
};

