import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
    id: Number,
    name: String,
    Address: String,
    Gender: String,
    DateOfBirth: Date,
})

const employee = mongoose.model('employee', employeeSchema);

export default employee;