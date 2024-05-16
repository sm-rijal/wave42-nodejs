const request = require('supertest');
const express = require("express");
const { getProduct, postProduct, getByIdProduct, patchProduct } = require("../controllers/product");
const router = require('../routes');

// const mockRequest = (body = {}) => {
//     return {body}
// }

// const mockResponse = () => {
//     const res = {}

//     res.json = jest.fn().mockReturnValue(res);
//     res.status = jest.fn().mockReturnValue(res);

//     return res
// }

describe('TEST API Product', () => {

    let app

    // localhost:8000/products
    beforeAll(() => {
        app = express();
        app.use(router)
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    test('Test GET product', async() => {

        const res = await request(app).get('/products')
        // expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('message')
    })

})
