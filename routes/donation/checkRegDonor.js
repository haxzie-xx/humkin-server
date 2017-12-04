var db = require('../../db')();

module.exports = (req, res) => {

    console.log('check user : '+req.body.adhaar);
    if(req.body.adhaar && req.body.bbid ){
        db.query('select d.blood, d.fname, d.lname from donor d, registry r where r.adhaar = \''+req.body.adhaar+'\' and r.adhaar = d.adhaar and r.bbid = '+req.body.bbid, (error, results, fields) => {
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