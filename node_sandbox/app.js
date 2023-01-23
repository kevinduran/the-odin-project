
// ------------------------- A VERY SIMPLE WEB SERVER -------------------------
// const http = require('http')

// const hostname = 'localhost'
// const port = 3000

// const server = http.createServer((req,res)=>{
//     res.statusCode = 200
//     res.setHeader('content-type','text/plain')
//     res.end('anakyn my allegiance is to the republic, to democracy!')
// })

// server.listen(port,hostname,()=>{
//     console.log(`server is on: http://${hostname}:${port}`)
// })


//------------------------- A VERY SIMPLE COMMAND LINE TOOL -------------------------
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What is your name? ', (answer) => {
//   console.log(`Your name is: ${answer}`);
//   rl.close();
// });

//------------------------- A VERY SIMPLE FILE WATCHER -------------------------

// const fs = require('fs');
// const path = require('path');

// const directory = './app.js';

// fs.watch(directory,(event,filename)=>{
//     if(event === 'change'){
//         const filepath = path.join(directory,filename)
//         console.log(`File ${filename} was changed`)
//     }
//     if(event === 'rename'){
//         console.log(`File ${filename} was added or deleted`)
//     }
// })

// console.log(`now watching ${directory} for changes`)

//------------------------- x -------------------------
