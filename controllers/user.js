const { findAllUser, findUser } = require("../models/userModel")

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
const getUserId = async(req, res) => {

    try {

        const user = req.user
        const users = await findUser(user.id)
        
        res.status(200).json({
            user: users,
            message: 'success'
        })

    } catch (error) {
        console.log(error);
    }

}

module.exports = {getUser, getUserId}