module.exports.add = (a, b) => a + b;

module.exports.squares = (a) => a * a;

module.exports.asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
};

module.exports.setName = (user, fullName) => {
    var names = fullName.split(' ');
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
};

module.exports.asyncSquares = (a, callback) => {
    setTimeout(() => {
        callback(a * a);
    }, 1000);
};