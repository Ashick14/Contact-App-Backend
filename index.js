//import express
const express=require("express")

// import cors
const cors=require('cors')

const logic=require('./services/logics')

// create an application using express
const emsServer=express()

// using cors to connect frontend port
emsServer.use(cors({
    origin:'http://localhost:3000'
}))

// create a middleware for parsing json data
emsServer.use(express.json())

// Define a port number
emsServer.listen(8000,()=>{
    console.log("emsServer listening on the port 8000");
})

// API call for getting all employee details
emsServer.get('/get-all-contacts',(req,res)=>{
    logic.getAllContacts().then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

emsServer.post('/add-contact',(req,res)=>{
    logic.addContact(req.body.id,req.body.firstname,req.body.lastname,req.body.email,req.body.phone,req.body.street,req.body.city,req.body.number,req.body.zipcode,req.body.lat,req.body.long).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

emsServer.delete('/delete-contact/:id',(req,res)=>{
    logic.deleteContact(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

emsServer.get('/view-contact/:id',(req,res)=>{
    logic.viewContact(req.params.id).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})

emsServer.post('/edit-contact/:id',(req,res)=>{
    logic.editContact(req.params.id,req.body.firstname,req.body.lastname,req.body.email,req.body.phone,req.body.street,req.body.city,req.body.number,req.body.zipcode,req.body.lat,req.body.long).then((response)=>{
        res.status(response.statusCode).json(response)
    })
})