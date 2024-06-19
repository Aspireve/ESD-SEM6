const http = require("http")
const userdata = require("./userdata")

const server = http.createServer(function(req, res) => {
    res.setHeader(200, {"Content-type": "text/html"})
    res.write("First name is: ", userdata.firstname)
    res.write("")
    // res.end("hello World")
    res.send()
})


server.listen(3000)