const Router = require('express');
const router = new Router();
const jobsController = require('../controllers/jobsController');

router.post('/', jobsController.create);
router.get('/', jobsController.getAll);

module.exports = router;