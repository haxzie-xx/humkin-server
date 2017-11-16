var db = require('../../db')();

module.exports = (req, res) => {

    console.log('====================================');
    console.log('update request --> '+req.body.nid);
    console.log('====================================');
    data = req.body;
    console.log(data);

    if( req.body.nid){
        let update_query = 'update nurses set ';
        update_query += 'fname = \''+data.fname+'\', ';
        update_query += 'lname = \''+data.lname+'\', ';
        update_query += 'email = \''+data.email+'\', ';
        update_query += 'phone = \''+data.phone+'\', ';
        update_query += 'gender = \''+data.gender+'\', ';
        update_query += 'location = \''+data.location+'\' where nid = '+data.nid+' and bbid = '+data.bbid;

        console.log(update_query);
        db.query(update_query, (error, results, fields) => {
            if(error) throw error;
            console.log(results);
            res.status(200).json({ 'message' : 'success'});
        });
    }else{
        res.end();
    }
    
}