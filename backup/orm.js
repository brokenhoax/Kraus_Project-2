const connection = require('../config/connection');


const orm = {

    selectAll: function(cb, condition, value) {
        const sqlQuery = `SELECT * FROM mywords`;
        connection.query(sqlQuery, function (err, data){
            if (err) cb(err, null);
            cb(null, data);
        });
    },

    selectAllBy: function(cb, condition, value) {
        const sqlQuery = `SELECT * FROM mywords WHERE ${condition} = ${value}`;
        connection.query(sqlQuery, function (err, data){
            if (err) cb(err, null);
            cb(null, data);
        });
    }
}

module.exports = orm;
