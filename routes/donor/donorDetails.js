var db = require('../../db')();

module.exports = (req, res) =>{

    let donor_query = 'select adhaar, bbid, fname, lname, email, phone, gender, blood, location, DATE_FORMAT(dob, \'%d/%m/%Y\') as dob from donor where adhaar = \''+req.params.adhaar+'\' '+
                        'and adhaar in (select adhaar from registry where bbid = '+ req.params.bbid +')';
    console.log(donor_query);
    db.query(donor_query, (error, results, fields) => {
        if(error) {
            throw error;
        };

        res.status(200).json(results);
    });
}