var db = require('../../db')();

module.exports = (req, res) =>{
    
    console.log('Donor : '+JSON.stringify(req.body));

    let data = req.body;

    let dparts = data.dob.split('/');

    //query to add to donor table
    donor_query = 'insert into donor(adhaar, bbid, fname, lname, email, phone, gender, blood, dob, location) ';
    donor_query += 'values(';
    donor_query += '\''+data.adhaar+'\', ';
    donor_query += ''+data.bbid+', ';
    donor_query += '\''+data.fname+'\', ';
    donor_query += '\''+data.lname+'\', ';
    donor_query += '\''+data.email+'\', ';
    donor_query += '\''+data.phone+'\', ';
    donor_query += '\''+data.gender+'\', ';
    donor_query += '\''+data.blood+'\', ';
    donor_query += '\''+dparts[2]+'-'+dparts[1]+'-'+dparts[0]+'\', ';
    donor_query += '\''+data.location+'\')';

    //query to add to registry
    registry_query = 'insert into registry values( \''+data.adhaar+'\', '+data.bbid+')';

    //adding the donor to donor table
    db.query(donor_query, (error, results, fields) =>{
        if(error){
            console.log(error);
            res.status(400).json({ 'message' : 'Unable to create record'});
        }else{
            console.log('Donor Created, creating registry entry ');

            //creating the registry of the donor in registry to bloodbank
            db.query(registry_query, (error, results, fields) => {
                if(error){
                    console.log(error);
                    res.status(400).json({ 'message' : 'Unable to add to registry'});
                }else{
                    //success
                    res.status(200).json({ 'message' : 'success'});
                }
            });
        }
    });
        
                    
}

// adhaar   | varchar(12) | NO   | PRI | NULL    |       |
// | bbid     | int(11)     | NO   | PRI | NULL    |       |
// | fname    | varchar(30) | NO   |     | NULL    |       |
// | lname    | varchar(30) | NO   |     | NULL    |       |
// | email    | varchar(30) | NO   |     | NULL    |       |
// | phone    | varchar(10) | NO   |     | NULL    |       |
// | gender   | varchar(1)  | NO   |     | NULL    |       |
// | blood    | varchar(4)  | NO   |     | NULL    |       |
// | location | varchar(50) | NO   |     | NULL    |       |
// | dob   