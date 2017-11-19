var db = require('../../db')();

module.exports = (req, res) => {

    if(req.body.bbid){
        let query = 'update bloodbank set ';
            query += 'name = \''+req.body.name+'\', ';
            query += 'email = \''+req.body.email+'\', ';
            query += 'phone = \''+req.body.phone+'\', ';
            query += 'city = \''+req.body.city+'\', ';
            query += 'address = \''+req.body.address+'\', ';
            query += 'pincode = \''+req.body.pincode+'\' ';
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