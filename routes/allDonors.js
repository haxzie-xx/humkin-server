var db = require('../db')();

module.exports = (req, res) =>{

    let donor_query = 'select adhaar, bbid, fname, lname, email, phone, gender, blood, location, get_age(dob, NOW()) as dob from donor order by reg_date desc';
    db.query(donor_query, (error, results, fields) => {
        if(error) throw error;
        console.log(results);
        res.status(200).json(results);
    });
}