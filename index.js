const http = require("http")

const server = http.createServer((req, res) => {
    res.end("hello World")
})

server.listen(3000)