// Import the ORM
var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller
module.exports = burger;