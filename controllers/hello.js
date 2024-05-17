const getHello = (req, res) => {

    
    return res.status(200).json({
        status: 'ok',
        message: 'Hello Guys'
    })
}

module.exports = getHello

// controllers