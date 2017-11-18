var db = require('../db')();

module.exports = (req, res) => {

    let query = 'select distinct city from bloodbank';

    db.query(query, (error, results, fields) => {
        if(error){
            console.log(error);
            res.status(400).json({ 'message' : 'error'});
        }

        console.log(results);
        res.status(200).json(results);
    })
}