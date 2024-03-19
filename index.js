//import json-server library 
const jsonServer = require('json-server')  // the variable name can be changed 

//create sever using create method 
const mediaPlayerServer = jsonServer.create() // server is created using the 'jsonServer' library 

//create path for database.json file  
const router = jsonServer.router('database.json')  // router() method is used to connect the database file to the server 

//create middleware to convert json into js
const middleware = jsonServer.defaults() //function which has the ability to control request-response cycle

//connect 
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//setup port for the server
const port = 4000 || process.env.PORT // port name can be changed //also called environment variables //default is 3000 // 'process.env.PORT' is used while hosting to switch to an available port

//run the server - 

mediaPlayerServer.listen(port,()=>{
    console.log('MediaPlayerServer running successfully');
}) 