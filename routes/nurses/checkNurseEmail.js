var db = require('../../db')();

module.exports = (req, res) =>{

    if(req.body.bbid){
        db.query('select * from nurses where email = \''+req.body.email+'\' and bbid = '+req.body.bbid, (error, results, fields) => {
            if(error) throw error;

            console.log(results);
            if(Object.keys(results).length > 0){
                res.status(200).json(results);
            }else{
                res.status(201).json({ 'message' : 'email already exists'});
            }
        })
    }
}