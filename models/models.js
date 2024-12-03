const db = require('../Dbconfig/db');

const User = {
    getAllUsers: (callback) => {
        const sql = "SELECT * FROM users";
        db.query(sql, (err, results) => {
            if (err) throw err;
            callback(results);
        });
    },

    getUserById: (id, callback) => {
        const sql = "SELECT * FROM users WHERE id = ?";
        db.query(sql, [id], (err, result) => {
            if (err) throw err;
            callback(result[0]);
        });
    },

    updateUser: (id, data, callback) => {
        const sql = "UPDATE users SET ? WHERE id = ?";
        db.query(sql, [data, id], (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = User;
