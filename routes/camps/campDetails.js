var db = require('../../db')();

module.exports = (req, res) =>{

    let camp_query = 'select camp_id, name, phone, location, DATE_FORMAT(cdate, \'%d/%m/%Y\')  as cdate, DATE_FORMAT(created, \'%d/%m/%Y\') as created from camps where bbid = '+req.params.bbid+' and camp_id = '+req.params.camp_id;
    console.log(camp_query);
    db.query(camp_query, (error, results, fields) => {
        if(error) {
            throw error;
        };

        console.log(results);

        res.status(200).json(results);
    });
}