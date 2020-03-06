const express = require('express');
const router = express.Router();

router.get('/', async (req, res, next) => {
    res.render('index', {title: 'IF14 Forever'});
});

module.exports = router;