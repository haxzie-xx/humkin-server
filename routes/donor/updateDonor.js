var db = require('../../db')();

module.exports = (req, res) => {

    console.log('====================================');
    console.log('update request --> '+req.body.adhaar);
    console.log('====================================');
    data = req.body;
    console.log(data);

    if( req.body.adhaar){
        let update_query = 'update donor set ';
        dparts = data.dob.split('/');
        update_query += 'adhaar = \''+data.adhaar+'\', ';
        update_query += 'bbid = '+data.bbid+', ';
        update_query += 'fname = \''+data.fname+'\', ';
        update_query += 'lname = \''+data.lname+'\', ';
        update_query += 'email = \''+data.email+'\', ';
        update_query += 'phone = \''+data.phone+'\', ';
        update_query += 'gender = \''+data.gender+'\', ';
        update_query += 'blood = \''+data.blood+'\', ';
        update_query += 'dob = \''+dparts[2]+'-'+dparts[1]+'-'+dparts[0]+'\', ';
        update_query += 'location = \''+data.location+'\' where adhaar = \''+data.adhaar+'\'';

        db.query(update_query, (error, results, fields) => {
            if(error) throw error;

            res.status(200).json({ 'message' : 'success'});
        });
    }else{
        res.end();
    }
    
}