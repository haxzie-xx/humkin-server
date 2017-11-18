var db = require('../../db')();

module.exports = (req, res) => {

    tquery = 'select * from hospitals where hid = '+req.params.hid;
    db.query( tquery, (error, results, fields)=>{
        if(error){
            res.status(201).json({ 'message' : 'failed'});
            console.log(error);
        }
        if(results.length > 0)
            res.status(200).json(results);
        else
            res.status(201).json(results);

    }) 
}