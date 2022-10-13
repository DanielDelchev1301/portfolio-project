const router = require('express').Router();

const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/aboutController');
const projectsController = require('./controllers/projectsController');
const { route } = require('./controllers/projectsController');

router.use('/', homeController);
router.use('/about', aboutController);
router.use('/projects', projectsController)

module.exports = router;