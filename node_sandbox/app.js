//first we declare a variable to hold our require() node module 'http'
const http = require('http');


//second we declare variables to hold our hostname and port 
const HOSTNAME= process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3000;


//third we declare a variable to hold our newly created server
    //our new server variable must
    //our server will need a status code 200
    //our server will need a header with the correct content-type
    //our server will end and leave a message (message must be in 'content-type' setting)
const server = http.createServer((request,response)=>{
    response.statusCode=200;
    response.setHeader('content-type','text/plain');
    response.end('hello friend')

})

//fourth we must listen to our newly created server variable
server.listen(PORT,HOSTNAME,()=>{
    console.log(`server running at http://${HOSTNAME}:${PORT}/`)
})