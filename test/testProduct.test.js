const request = require('supertest');
const express = require("express");
const { getProduct, postProduct, getByIdProduct, patchProduct } = require("../controllers/product");
const router = require('../routes');

jest.mock('../controllers/product')

describe('GET test products return json data', () => {

    let app

    // localhost:8000/products
    beforeAll(() => {
        app = express();
        app.use(router)
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('get all product with json', async () => {

        const mockProduct = [
            {
              "id": 38,
              "name": "Jeruk",
              "price": 25500,
              "image": "http://localhost:8000/uploads/1713790110235-cimory.png",
              "toko": "Laku Terus",
              "store_id": 3,
              "stock": 2
            },
            {
              "id": 37,
              "name": "Pisang",
              "price": 12500,
              "image": "http://localhost:8000/uploads/1713790092556-astronot.jpg",
              "toko": "Maju Jaya",
              "store_id": 1,
              "stock": 2
            }
          ]


        getProduct.mockImplementation(async(req, res) => {
            res.json(mockProduct)
        });

        const response = await request(app).get('/products')
        expect(response.status).toEqual(200);
        expect(response.body).toEqual(mockProduct);
    });
});