// Node + MongoDB connection
// import mongoose
const mongoose=require('mongoose');

// connection string
mongoose.connect('mongodb://localhost:27017/Contact-Details');

// Create a model
const contact=mongoose.model('contact',{
    id:String,
    name:{firstname:String,lastname:String},
    email:String,
    phone:String,
    address:{street:String,city:String,number:String,zipcode:String},
    geolocation:{lat:String,long:String}
})

module.exports={
    contact
}