import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import studentmodel from "../Model/student.js";

export async function saveStudent(req, res) {
  try {
    const eccryptedpassword = await bcrypt.hash(req.body.password, 12);
    const student = new studentmodel({
      email: req.body.email,
      name: req.body.name,
      mobile: req.body.mobile,
      password: eccryptedpassword,
    });
    const savedstudent = await student.save();
    res.status(StatusCodes.CREATED).json(savedstudent);
  } catch (error) {
    res
      .status(StatusCodes.INSUFFICIENT_SPACE_ON_RESOURCE)
      .json({ message: "someting went wrong" });
  }
}
export async function login(req, res) {
  try {
    let mobile = req.body.mobile;
    const saveStudent = await studentmodel.findOne({ mobile: mobile });
    if (saveStudent) {
      if (bcrypt.compareSync(req.body.password, saveStudent.password)) {
        const jwtToken = jwt.sign({ student: saveStudent.mobile }, "1234");
        res
          .status(StatusCodes.OK)
          .json({ message: "user login", token: jwtToken });
      }
    } else {
      res
        .status(StatusCodes.INSUFFICIENT_SPACE_ON_RESOURCE)
        .json({ message: "someting went wrong" });
    }
  } catch (error) {
    res
      .status(StatusCodes.INSUFFICIENT_SPACE_ON_RESOURCE)
      .json({ message: "someting went wrong" });
  }
}

