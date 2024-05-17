const request = require('supertest');
const express = require("express");
const { getProduct, postProduct, getByIdProduct, patchProduct } = require("../controllers/product");
const router = require('../routes');
const bcrypt = require('bcrypt');

jest.mock('../controllers/product')

describe('GET test products return json data', () => {

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

        const response = await request(app)
        .get('/products')
        .set('Authorization', `Bearer ${token}`);
        expect(response.status).toEqual(200);
        expect(response.body).toEqual(mockProduct);
    });
});