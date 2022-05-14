import express from "express";
import employee from "../models/employee.js";

import { getEmployees, createEmployee } from "../controllers/employee.js";


const router = express.Router();

router.get('/', getEmployees);
router.post('/', createEmployee);

export default router;