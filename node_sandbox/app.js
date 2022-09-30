const http = require('http')
const fs = require('fs')
const { text } = require('stream/consumers')
const port = 3000

const server = http.createServer(function(req,res){
    res.writeHead(200, {'content-type':'text/html'})
    fs.readFile

    res.write('hello,friend')
    res.end()
})

server.listen(port,function(error){
    if(error) {
        console.log('something went wrong: ',error)
    }else{
        console.log('server is listening on port: ' + port)
    }
})