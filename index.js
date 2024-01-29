const http = require("http");
const product = require("./product");

let products = product();

const handleCors = (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
};

const server = http.createServer((req, res) => {
    handleCors(req, res);

    if (req.url === "/products") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(products));
    } else if (req.url === "/product/aqua") {
        const findProduct = products.find((item) => item.nama.toLowerCase() === "aqua");
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ data: findProduct }));
    } else {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ data: "Hello" }));
    }
});

const port = 3000;

server.listen(port, () => console.log(`Server running on port ${port}`));
