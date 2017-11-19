var db = require('../../db')();

module.exports = (req, res) => {

    if(req.body.bbid){
        console.log('change pswd : '+req.body.old_pass+' -> '+req.body.new_pass);
        
        let query = 'update manager set password = \''+ req.body.new_pass+'\' where bbid = '+req.body.bbid+' and password = \''+req.body.old_pass+'\'';
        db.query(query, (error, results, fields)=> {
            if(error){
                console.log(error);
                res.status(400).json(error);
            };

            res.status(200).json(results);
        })
    }
}