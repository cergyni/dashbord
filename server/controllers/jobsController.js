const { Jobs } = require('../models/models');
const ApiError = require('../error/ApiError');

class JobsController {
    async create(req, res, next) {
        try {
            const { job_title } = req.body;
            const job = await Jobs.create({ job_title });
            return res.json(job);
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res) {
        const job_titles = await Jobs.findAll()
        return res.json(job_titles)
    }
}

module.exports = new JobsController()