var db = require('../../db')();

module.exports = (req, res) => {

    if(req.body.bbid){
        let query = 'update manager set ';
            query += 'fname = \''+req.body.fname+'\', ';
            query += 'lname = \''+req.body.lname+'\', ';
            query += 'email = \''+req.body.email+'\', ';
            query += 'phone = \''+req.body.phone+'\' ';
            query += 'where bbid = '+req.body.bbid;

        db.query(query, (error, results, fields)=> {
            if(error){
                console.log(error);
                res.status(400).json(error);
            };

            res.status(200).json(results);
        })
    }
}