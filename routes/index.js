const express = require("express");
const { getAllUsers, getById, postUser } = require("../controllers/users");
const router = express.Router()

router.get('/', (req, res) => {
    res.send("Hello World")
})

router.get('/users', getAllUsers)
router.get('/users/:id', getById)
router.post('/users', postUser);

module.exports = router;