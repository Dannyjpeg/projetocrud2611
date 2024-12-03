const User = require('../models/models');

exports.getAllUsers = (req, res) => {
    User.getAllUsers((users) => {
        res.render('index', { users });
    });
};

exports.getUserById = (req, res) => {
    const userId = req.params.id;
    User.getUserById(userId, (user) => {
        res.render('edit', { user });
    });
};

exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const updatedUser = {
        name: req.body.name,
        email: req.body.email
    };

    User.updateUser(userId, updatedUser, () => {
        res.redirect('/');
    });
};
