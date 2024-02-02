const {getProducts, getUsers} = require("../dataDummy");

const products = getProducts();
const users = getUsers()

function routes(req, res){

    if (req.url === "/products") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(products));
    } else if (req.url === "/product/aqua") {
        const findProduct = products.find((item) => item.nama.toLowerCase() === "aqua");
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ data: findProduct }));
    } else if (req.url === "/users") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users));
    } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ data: "Hello" }));
    }
}

module.exports = routes