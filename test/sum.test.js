const sum = require('../controllers/sum');

test('test tambah', () => {

    expect(sum(1, 2)).toBe(3);

});