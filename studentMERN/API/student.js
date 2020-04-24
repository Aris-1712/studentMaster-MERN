const mongoose=require("mongoose")

const studentSchema= new mongoose.Schema({
    Name: String,
    ID: String,
    Course: String,
    Mob: String,
    Email: String,
    Gender: String,
    Fee: Boolean,
    DOB: String,
    Hobbies: Array,
    pic: String,
    files: Array,
    scores: Array,
})

const Student=mongoose.model("Student",studentSchema)

module.exports=Student
