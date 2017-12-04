var db = require('../../db')();

module.exports = (req, res) =>{

    console.log('new Request '+JSON.stringify(req.params));
    if(req.params.bbid){
        let donor_query = 'select adhaar, bbid, fname, lname, email, phone, gender, blood, location, get_age(dob, NOW()) as dob from donor '+
        'where adhaar in (select adhaar from registry where bbid = '+req.params.bbid+' ) order by reg_date desc limit '+req.body.from+', '+req.body.to;
            db.query(donor_query, (error, results, fields) => {
                if(error) throw error;
                console.log('All Donors list sent');
                res.status(200).json(results);
            });
    }else{
        console.log("error");
        res.status(400).end();
    }
    
}