const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017/OnBoardingPortal?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
const mongoURI = "mongodb+srv://root:root@cluster0.fwbsnj4.mongodb.net/OnBoardingPortal?retryWrites=true&w=majority";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;