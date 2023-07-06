const express = require('express');

const router = express.Router();

router.get('/admin', (req, res, next) => {
    res.send(
        '<h1>ADMIN</h1>'
    );
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;
