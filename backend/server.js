const app = require("./app")
const dotenv = require("dotenv")
const connectDatabase = require("./config/database")

const port = process.env.PORT || 8800

// handling uncaught Exception

process.on("uncaughtException", (err)=>{
    console.log(`Uncaught exception: ${err.message}`)
    console.log(`shutting down the sever due to uncaught exception`)
    process.exit(1)
})



// config
dotenv.config({path:"backend/config/config.env"})


// connecting databaase

connectDatabase()

const server = app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`)
})


//  unhandled  promise rejection

process.on("unhandledRejection", (err)=>{
    console.log(`Error : ${err.message}`)
    console.log(`shutting down the server due to unhandled promise rejection`)
    server.close(()=>{
        process.exit(1);
    })
})