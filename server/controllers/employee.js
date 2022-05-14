import employee from "../models/employee.js";

export const getEmployees = async (req,res) => {
    try {
        const allEmployees = await employee.find();
        res.status(200).json(allEmployees);

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}


export const createEmployee = async (req,res) => {
    const employee = req.body;
    const newEmployee = new employee(employee);

    try {
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        res.status(409).json({message : error.message})
        
    }
}