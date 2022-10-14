const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('certificates');
});

module.exports = router;