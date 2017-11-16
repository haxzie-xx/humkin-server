var db = require('../../db')();

module.exports = (req, res) =>{

    if(req.body.bbid){
        db.query('select * from nurses where nid = \''+req.body.nurse_id+'\' and bbid = '+req.body.bbid, (error, results, fields) => {
            if(error) throw error;

            console.log(results);
            if(Object.keys(results).length > 0){
                res.status(200).json(results);
            }else{
                res.status(201).json({ 'message' : 'nid already exists'});
            }
        })
    }
}