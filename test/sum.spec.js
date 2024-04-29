const sum = require('../controllers/sum');

const mockRequest = (body = {}) => {
    return {body}
}

const mockResponse = () => {
    const res = {}

    res.json = jest.fn().mockReturnValue(res);
    res.status = jest.fn().mockReturnValue(res);

    return res
}

describe('test fungsi sum', () => {

    test('test status code 200', () => {

        const req = mockRequest({inputSatu: 2, inputDua: 3});
        const res = mockResponse();
    
        sum(req, res)

        expect(res.status).toBeCalledWith(200)
        expect(res.json).toBeCalledWith({
            message: 'ok',
            data: {inputSatu: req.body.inputSatu, inputDua: req.body.inputDua, result: req.body.inputSatu + req.body.inputDua}
        });
    });

})
