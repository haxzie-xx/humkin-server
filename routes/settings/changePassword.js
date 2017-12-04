var db = require('../../db')();

module.exports = (req, res) => {

    if(req.body.bbid && req.body.old_pass && req.body.new_pass){
        console.log('change pswd : '+req.body.old_pass+' -> '+req.body.new_pass);
        
        let check_query = "select * from manager where bbid = "+req.body.bbid+" and password = \'"+req.body.old_pass+"\'";
        db.query(check_query, (error, results, fields) => {
            if(Object.keys(results).length > 0){
                console.log(results);
                let query = 'update manager set password = \''+ req.body.new_pass+'\' where bbid = '+req.body.bbid+' and password = \''+req.body.old_pass+'\'';
                db.query(query, (error, results, fields)=> {
                    if(error){
                        console.log(error);
                        res.status(400).json(error);
                    };
        
                    res.status(200).json(results);
                });
            }else{
                console.log("")
                res.status(201).json({ 'message' : 'password doesnt match'});
            }
        })
        
    }else{
        res.status(202).json({ 'message' : 'Missing parameters'});
    }
}