const bcrypt = require('bcrypt') 
const jwt = require('jsonwebtoken') 

const { registerUser, loginUser } = require('../models/authModel')

const register = async(req, res) => {

    const {name, email, password} = req.body

    const encryptedPassword = bcrypt.hashSync(password, 10)

    const newUser = {
        name,
        email,
        password: encryptedPassword
    }

    await registerUser(newUser)

    res.status(201).json({
        data: newUser,
        message: 'success'
    })
}

const login = async(req, res) => {

    const {email, password} = req.body
    const user = await loginUser(email);

    console.log(user);

    // validasi email
    if(!user){
        return res.status(400).json({
            message: 'email tidak terdaftar'
        })
    }

    // validasi password
    const isPasswordValid = bcrypt.compareSync(password, user.password)
    // console.log(isPasswordValid);
    if(!isPasswordValid){
        return res.status(400).json({
            message: 'password tidak benar'
        })
    }

    // create token
    const secretKey = 'rahasia'
    const accessToken = jwt.sign({
        id: user.id,
        email: user.email
    }, secretKey, {expiresIn: '1h'})

    res.status(200).json({
        user: {
            name: user.name,
            email: user.email,
        },
        accessToken,
        message: 'success',
    })
}

const whoami = (req, res) => {

    const user = req.user // req.user ngambil data passport jwt findUser
    res.status(200).json({
        user: {
            name: user.name,
            email: user.email
        },
        message: 'success'
    })
}

module.exports = {register, login, whoami}