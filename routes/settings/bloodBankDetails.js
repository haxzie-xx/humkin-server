var db = require('../../db')();

module.exports = (req, res) => {

    if(req.params.bbid){
        let query = 'select * from bloodbank where bbid = '+req.params.bbid;
        db.query(query, (error, results, fields)=> {
            if(error){
                console.log(error);
                res.status(400).json(error);
            };

            res.status(200).json(results);
        })
    }
}