const validateProduct = (req, res, next) => {
    const {name, price} = req.body
    console.log(req);
    // validate email and name
    if(!name || !price){
        return res.status(400).json({
            message: 'name and email is required'
        })
    }

    next()
}

module.exports = validateProduct