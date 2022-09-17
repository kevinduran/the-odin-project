


//first we declare a variable to hold our require() node module 'http'
const http = require('http');


//second we declare variable to hold our hostname 
const HOSTNAME= process.env.HOSTNAME || 'localhost';


//third we declare a variable to hold  our PORT variable that specifies...
///...the port the server should listen to
const PORT = process.env.PORT || 3000;
            //TIP---here we are checking the process.env.PORT before giving a fallback port.
            //try to console.log(process.env.PORT) for a better idea
            //SECONDTIP---- process.env is a normal object, so you can override the value e



//fourth we declare a variable to hold our newly created server
    //our new server variable must
    //our server will need a status code 200
    //our server will need a header with the correct content-type
    //our server will end and leave a message (message must be in 'content-type' setting)
const server = http.createServer((request,response)=>{
    response.statusCode=200;
    response.setHeader('content-type','text/plain');
    response.end('hello friend')

})

//fifth we must listen to our newly created server variable
server.listen(PORT,HOSTNAME,()=>{
    console.log(`server is running on http://${HOSTNAME}:${PORT}/`)
})