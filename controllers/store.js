const { findAllStore } = require("../models/storeModel")

const getStore = async(req, res) => {
    // console.log('test');
    try {
        const store = await findAllStore();
        // console.log(store);
        res.json({
            message: 'ok',
            data: store
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'internal server error'
        });
        
    }
}

module.exports = {getStore}