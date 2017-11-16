var db = require('../../db')();

module.exports = (req, res) =>{

    let donor_query = 'select * from storage where bbid = '+ req.params.bbid;

    db.query(donor_query, (error, results, fields) => {
        if(error) {
            throw error;
        };

        res.status(200).json(results);
    });
}