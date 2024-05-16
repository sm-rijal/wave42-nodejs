const getHello = require('../controllers/hello');

const mockRequest = () => {
    return 
}

const mockResponse = () => {
    const res = {}

    res.json = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);

    return res
}

describe('test fungsi get hello', () => {

    test('test status code 200', () => {

        const req = mockRequest();
        const res = mockResponse();
    
        getHello(req, res)

        expect(res.status).toBeCalledWith(200)
        expect(res.json).toBeCalledWith({
            message: "Hello guys"
        })
    
    });

})
