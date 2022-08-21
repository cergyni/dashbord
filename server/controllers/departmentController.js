const { Department } = require('../models/models');
const ApiError = require('../error/ApiError');

class DepartmentController {
    async create(req, res, next) {
        try {
            const { title, description, date, managerId } = req.body;
            const department = await Department.create({ title, description, date, managerId })
            return res.json(department)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res) {
        const departments = await Department.findAll()
        return res.json(departments)
    }

    async getOne(req, res) {
        const { id } = req.params;
        const department = await Department.findOne({ where: { id } });
        return res.json(department)
    }
}

module.exports = new DepartmentController()