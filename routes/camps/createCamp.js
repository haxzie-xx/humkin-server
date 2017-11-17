var db = require('../../db')();

module.exports = (req, res) =>{
    
    console.log('camp : '+JSON.stringify(req.body));

    let data = req.body;

    let dparts = data.date.split('/');

    //query to add to donor table
    donor_query = 'insert into camps(bbid, name, cdate, phone, location) ';
    donor_query += 'values(';
    donor_query += data.bbid+', ';
    donor_query += '\''+data.name+'\', ';
    donor_query += '\''+dparts[2]+'-'+dparts[1]+'-'+dparts[0]+'\', ';    
    donor_query += '\''+data.phone+'\', ';
    donor_query += '\''+data.location+'\')';

    //adding the camp to camps table
    db.query(donor_query, (error, results, fields) =>{
        if(error){
            console.log(error);
            res.status(400).json({ 'message' : 'Unable to create record'});
        }else{
            console.log('Donor Created, creating registry entry ');
            res.status(200).json({ 'message' : 'success'});
        }
    });
        
                    
}