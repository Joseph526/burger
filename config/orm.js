// Import MySQL connection.
var connection = require("../config/connection.js");

// ORM object to hold SQL statement methods
var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

// Export the orm object for the model
module.exports = orm;