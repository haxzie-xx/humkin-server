var db = require('../../db')();

module.exports = (req, res) =>{

    console.log('new Request '+JSON.stringify(req.params));
    if(req.params.bbid){
        let donor_query = 'select nid, fname, lname, email, phone, gender, location, DATE_FORMAT(join_date, \'%d/%m/%Y\') as date from nurses '+
        'where bbid = '+ req.params.bbid +' order by join_date';
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