import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import StudentRouter from './src/Router/studentRouter.js'
mongoose.connect("mongodb://localhost:27017/user")
const DB=mongoose.connection
const app=express()
app.use(express.json())
app.use(cors())
app.use(StudentRouter)

const PORT=3000
app.listen(PORT,()=>{
    console.log("server runing at "+PORT)
})
DB.on("error",(error)=>{
    console.log(error)
})
DB.once('connected',()=>{
    console.log("databased connected")
})