var db = require('../../db')();

module.exports = (req, res) =>{

    let query = 'select count(*) as count from registry where bbid = '+req.params.bbid;
    db.query(query, (error, results, fields)=>{
        if(error){
            res.status(404).json({ 'message' : 'error'});
            console.log(error);
        }

        res.status(200).json(results);
    })
}