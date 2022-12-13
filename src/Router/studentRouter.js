import express from 'express'
import { login, saveStudent } from '../Controoler/StudentContrroler.js'
const StudentRouter=express.Router()
StudentRouter.post("/registration",saveStudent)
StudentRouter.post("/login",login)

export default StudentRouter;