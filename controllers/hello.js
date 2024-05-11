const getHello = (req, res) => {

    
    return res.status(200).json({
        message: 'Hello'
    })
}

module.exports = getHello

// controllers