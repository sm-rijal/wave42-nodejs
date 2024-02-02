const http = require("http");

const handleCors = require("./cors");
const routes = require("./routes/routes");

const server = http.createServer((req, res) => {
    handleCors(req, res);
    routes(req, res);
});

const port = 3000;

server.listen(port, () => console.log(`Server running on port ${port}`));
