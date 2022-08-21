const Router = require('express');
const router = new Router();
const employeeRouter = require('./employeeRouter');
const departmentRouter = require('./departmentRouter');
const jobsRouter = require('./jobsRouter');

router.use('/employee', employeeRouter);
router.use('/department', departmentRouter);
router.use('/jobs', jobsRouter);

module.exports = router;