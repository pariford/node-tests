const expect = require('expect');
const supertest = require('supertest');
const utils = require('./utils');
const server = require('../server/server').app;

describe('Utils&Server', () => {
    describe('Utils', () => {
        it('should add two numbers', () => {
            var resAdd = utils.add(33, 11);
            expect(resAdd).toBe(44).toBeA('number');
            /* if (resAdd !== 44) {
                throw new Error(`Expected 44,got ${res}`);
            } */
        });

        it('should provide squares', () => {
            var resSquares = utils.squares(2);
            expect(resSquares).toBe(4).toBeA('number');
            /* if (resSquares != 4) {
                throw new Error(`Expected 4, got ${resSquares}`);
            } */
        });
        describe('async', () => {
            it('should async add two numbers', (done) => {
                utils.asyncAdd(3, 4, (sum) => {
                    expect(sum).toBe(7).toBeA('number');
                    done();
                });
            });

            it('should async give squares of the number', (done) => {
                utils.asyncSquares(5, (squares) => {
                    expect(squares).toBe(25).toBeA('number');
                    done();
                })
            });
        })

        it('should set first and last name', () => {
            var user = {
                state: "TamilNadu",
                age: 25
            };
            var userDetails = utils.setName(user, 'Paritosh Bapat');
            expect(userDetails).toInclude({
                firstName: "Paritosh",
                lastName: "Bapat"
            });
        });

        it('should expect some values', () => {
            expect({
                name: "Paritosh"
            }).toEqual({
                name: 'Paritosh'
            });
        });
    });

    describe('Server', () => {
        describe('GET /', () => {
            it('should support a get request', (done) => {
                supertest(server)
                    .get('/')
                    .expect(200)
                    //.expect("hello World")
                    .expect({
                        error: "Page not Found"
                    })
                    .end(done);
            });
        });
        describe('GET /users', () => {
            it('should support a get request for users', (done) => {
                supertest(server)
                    .get('/users')
                    .expect(200)
                    .expect((res) => {
                        expect(res.body).toInclude({
                            name: "Paritosh Bapat",
                            age: 25
                        });
                    })
                    .end(done);
            });
        });
    });

});