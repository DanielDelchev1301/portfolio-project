const router = require('express').Router();

const homeController = require('./controllers/homeController');
const aboutController = require('./controllers/aboutController');
const projectsController = require('./controllers/projectsController');
const contactController = require('./controllers/contactController');
const certificatesController = require('./controllers/certificatesController');

router.use('/', homeController);
router.use('/about', aboutController);
router.use('/projects', projectsController);
router.use('/contact', contactController);
router.use('/certificates', certificatesController);

module.exports = router;