const { findAllUser } = require("../models/userModel")

const getUser = async(req, res) => {

    try {
        const users = await findAllUser()
        
        res.status(200).json({
            data: users,
            message: 'success'
        })

    } catch (error) {
        console.log(error);
    }

}

module.exports = {getUser}