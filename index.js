const http = require("http")


const server = http.createServer((request, response) => {
    // console.log(request.method);
    // console.log(request.url);
    if(request.url === "/users"){
        response.write("Hallo users")
        // SELECT * FROM blog
        // INSERT INTO product 
    } else {
        response.write("Hallo World")
    }

    response.end()
})

const port = 3000

server.listen(port, () => console.log(`server running on port ${port}`))
