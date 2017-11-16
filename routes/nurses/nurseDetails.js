var db = require('../../db')();

module.exports = (req, res) =>{

    let donor_query = 'select nid, bbid, fname, lname, email, phone, gender, location from nurses where nid = '+req.params.nid+' '+
                        'and bbid = '+ req.params.bbid;

    db.query(donor_query, (error, results, fields) => {
        if(error) {
            throw error;
        };

        res.status(200).json(results);
    });
}