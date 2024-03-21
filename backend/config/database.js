const mongoose = require("mongoose");

const connectDatabase = () =>{
    mongoose.connect(process.env.DB_URI).then(()=>{
    // mongoose.connect(process.env.DB_URI,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true}).then(()=>{
        // console.log(`Mongodb connected with server: ${data.connection.host}`);
        console.log(`Mongodb connected`);
    })
}

module.exports = connectDatabase