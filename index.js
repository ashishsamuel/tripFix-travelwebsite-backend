//import dotenv ------ load .env contents into  process.env
require('dotenv').config()

// express used to create server
const express = require('express')

// import cors
const cors = require('cors')

// import router
const router = require('./Routes/router')

// creating express server - creates an express application 
const tripServer = express()

//calling cors for using it for transfering data between application running in different ports
tripServer.use(cors())
// used for parsing json in express and it returns a middleware 
tripServer.use(express.json())
// calling router
tripServer.use(router)

// customize port no to listen to http request
// currently we use 4000 but after deplying the application to access the available port no we need to use process.env.PORT
const PORT = 4000 || process.env.PORT

// run server app 
// listen method accepts the port no and the callback which will display the message that we want to display in the terminal 
// while we run the server app 
tripServer.listen(PORT,()=>{
    console.log(`Trip Server started at port : ${PORT} and waiting for client requests`);
})

// to resolve http request that comes to the localhost url 
// only get requests we will see in the browser
// http get request to http://localhost:4000/ server 
tripServer.get('/',(req,res)=>{
    res.send(`<h3>Trip Server started and waiting for client requests!!! </h3>`)
})

