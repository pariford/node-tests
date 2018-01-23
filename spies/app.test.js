const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy(),
        createUser:expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Paritosh', 25);
        expect(spy).toHaveBeenCalledWith('Paritosh', 25);
    });

    it('should have called the db spy correctly', () => {
        var email = "paritoshvit@gmail.com";
        var password = "123abc@";
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({
            email,
            password
        });
        expect(db.createUser).toHaveBeenCalledWith({
            email,
            password
        });
    });
});