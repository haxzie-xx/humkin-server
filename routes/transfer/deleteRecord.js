var db = require('../../db')();

module.exports = (req, res) => {

    tquery = 'delete from transfer where tid = '+req.body.tid+' and bbid = '+req.body.bbid;
    db.query( tquery, (error, results, fields)=>{
        if(error){
            res.status(201).json({ 'message' : 'failed'});
            console.log(error);
        }

        res.status(200).json(results);
    }) 
}