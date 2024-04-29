
const sum = (req, res) => {

    // console.log(req.body);

    const {inputSatu, inputDua} = req.body
    const result = inputSatu + inputDua

    return res.status(200).json({
        message: 'ok',
        data: {inputSatu, inputDua, result}
    })
}

module.exports = sum