var db = require('../../db')();

module.exports = (req, res) => {

    if(req.body.adhaar){
        db.query('select * from donor where adhaar = \''+req.body.adhaar+'\'', (error, results, fields) => {
            if(error) throw error;

            console.log(results);
            if(Object.keys(results).length > 0){
                res.status(200).json(results);
            }else{
                res.status(201).json({ 'message' : 'user already exists'});
            }
        })
    }
}