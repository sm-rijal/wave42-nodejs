const handleCors = (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
};

module.exports = handleCors