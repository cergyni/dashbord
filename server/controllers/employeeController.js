const { Employee } = require("../models/models")
const ApiError = require('../error/ApiError')

class EmployeeController {
    async create(req, res, next) {
        try {
            const { first_name, second_name, date, role, departmentId } = req.body;
            const employee = await Employee.create({ first_name, second_name, date, role, departmentId });
            return res.json(employee)
        } catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async getAll(req, res) {
        const employees = await Employee.findAll();
        return res.json(employees)
    }
    async getOne(req, res) {
        const { id } = req.params;
        const employee = await Employee.findOne({ where: { id } });
        return res.json(employee)
    }
}

module.exports = new EmployeeController()