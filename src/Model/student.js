import mongoose from "mongoose";
const Studentschema=new mongoose.Schema({
    email:{type:String,require:true},
    name:{type:String,require:true},
    mobile:{type:Number,require:true},
    password:{type:String,require:true},

})
const studentmodel=mongoose.model('student',Studentschema);
export default studentmodel;