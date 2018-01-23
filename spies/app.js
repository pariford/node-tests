const db = require('./db');
module.exports.handleSignup = (email, password) => {
    db.saveUser({
        email,
        password
    });
    db.createUser({
        email,
        password
    });
}