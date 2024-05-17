const getHello = (req, res) => {

    
    return res.status(200).json({
        message: 'Hello Guys'
    })
}

module.exports = getHello

// controllers