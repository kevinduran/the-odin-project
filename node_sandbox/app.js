const http = require('http');

const HOSTNAME= process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3000;

const server = http.createServer((request,response)=>{
    response.statusCode=200;
    response.setHeader('content-type','text/plain');
    response.end('hello friend')

})

server.listen(PORT,HOSTNAME,()=>{
    console.log(`server running at http://${HOSTNAME}:${PORT}/`)
})