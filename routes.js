const router = require('express').Router();

const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/aboutController');
const projectsController = require('./controllers/projectsController');
const contactController = require('./controllers/contactController');

router.use('/', homeController);
router.use('/about', aboutController);
router.use('/projects', projectsController);
router.use('/contact', contactController);

module.exports = router;