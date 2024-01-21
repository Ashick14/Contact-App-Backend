// import db.js
const db=require('../services/db')


// logic for get all contacts from the database
const getAllContacts=()=>{
    return db.contact.find().then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    contacts:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:'Employees not found'
                }
            }
        }
    )
}

// logic for add a contact to the database
const addContact=(id,firstname,lastname,email,phone,street,city,number,zipcode,lat,long)=>{
    return db.contact.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:404,
                    message:"Contact already exist"
                }
            }
            else{
                const newContact=new db.contact({id,name:{firstname,lastname},email,phone,address:{street,city,number,zipcode},geolocation:{lat,long}})
                newContact.save()
                return{
                    statusCode:200,
                    message:"Contact added successfully"
                }
            }
        }
    )
}

// logic for delete a contact from database
const deleteContact=(id)=>{
    return db.contact.deleteOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    message:"Contact Deleted Successfully"
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"Contact not found"
                }
            }
        }
    )
}

// logic for view a contact
const viewContact=(id)=>{
    return db.contact.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    statusCode:200,
                    contact:result
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"Contact not found"
                }
            }
        }
    )
}

// logic for edit a contact
const editContact=(id,firstname,lastname,email,phone,street,city,number,zipcode,lat,long)=>{
    return db.contact.findOne({id}).then(
        (result)=>{
            if(result){
                result.id=id;
                result.name.firstname=firstname;
                result.name.lastname=lastname;
                result.email=email;
                result.phone=phone;
                result.address.street=street;
                result.address.city=city;
                result.address.number=number;
                result.address.zipcode=zipcode;
                result.geolocation.lat=lat;
                result.geolocation.long=long;
                result.save()
                return{
                    statusCode:200,
                    message:"Contact Details Updated Succesfully"
                }
            }
            else{
                return{
                    statusCode:404,
                    message:"Contact Not Found"
                }
            }
        }
    )
}

module.exports={
    getAllContacts,
    addContact,
    deleteContact,
    viewContact,
    editContact
}