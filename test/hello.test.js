const request = require('supertest');
const express = require("express");
const getHello = require("../controllers/hello");
const router = require('../routes');

jest.mock('../controllers/hello')

describe('GET /hello', () => {

    let app

    // localhost:8000/products
    beforeEach(() => {
        app = express();
        app.use(router)
    })

    it('responds with json', async () => {

        getHello.mockImplementation((req, res) => res.send('Hello World'));


        const response = await request(app).get('/')
        expect(response.status).toEqual(200);
        expect(response.text).toBe('Hello World');
    });
});