const express=require('express')
const Student=require('./Routes/Student')
const helmet=require("helmet")
const compression=require("compression")
const mongoose=require('mongoose')
const app=express()
const cors=require("cors")
app.use(helmet())
app.use(compression())
app.use(express.json())
const connection=async()=>{
    try{
        // await mongoose.connect("mongodb+srv://aris:Arisgani1712@aris1712-tjr9h.mongodb.net/test?retryWrites=true&w=majority/Student")
    await mongoose.connect("mongodb+srv://aris:Arisgani1712@cluster0-ijyof.mongodb.net/Student?retryWrites=true&w=majority",{w:1,j:true})
    // mongodb+srv://<username>:<password>@aris1712-tjr9h.mongodb.net/test?retryWrites=true&w=majority
    // mongodb+srv://aris:Arisgani1712@cluster0-ijyof.mongodb.net/test?retryWrites=true&w=majority
    console.log("connected")
    }   
    catch(err){
        console.log(err)
    }
} 
connection()
app.use(cors())
app.use('/Student',Student)
app.listen(process.env.PORT,()=>{console.log("Listening")})



