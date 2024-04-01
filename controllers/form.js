const { findAllStore } = require("../models/storeModel");


const formProduct = async(req, res) => {
    const store = await findAllStore();
    res.render('form', {store})
}

module.exports = formProduct