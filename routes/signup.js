var db = require('../db')();

module.exports = (req, res) => {
    console.log(JSON.stringify(req.body));
    res.status(200).json({ 'message': 'success'});
}