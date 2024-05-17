const request = require('supertest');
const express = require("express");
const bcrypt = require('bcrypt');
const router = require('../routes');

describe('TEST API Product', () => {

    let app;
    let token;

    const mockUser = {
        id: 1,
        name: 'Samsul',
        email: 'samsul@mail.com',
        password: bcrypt.hashSync('1234', 10)
    };

    beforeAll(() => {
        app = express();
        app.use(express.json());
        app.use(router);

        // Mock loginUser function
        jest.mock('../controllers/auth', () => ({
            loginUser: jest.fn().mockImplementation(email => {
                if (email === mockUser.email) {
                    return Promise.resolve(mockUser);
                }
                return Promise.resolve(null);
            })
        }));
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    const getToken = async () => {
        const res = await request(app)
            .post('/login')
            .send({
                email: 'samsul@mail.com',
                password: '1234'
            });

        return res.body.accessToken;
    };

    beforeEach(async () => {
        token = await getToken();
    });

    test('Test GET product', async () => {
        const res = await request(app)
            .get('/products')
            .set('Authorization', `Bearer ${token}`);

        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('message');
    });

});
