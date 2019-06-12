var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/api', function(req, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3001")
    res.json({ "hello": "老王" })
})
module.exports = router;