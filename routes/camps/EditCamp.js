var db = require('../../db')();

module.exports = (req, res) => {

    console.log('====================================');
    console.log('update request --> '+req.body.camp_id);
    console.log('====================================');
    data = req.body;
    dparts = data.date.split('/');
    console.log(data);

    if( req.body.camp_id){
        let update_query = 'update camps set ';
        update_query += 'name = \''+data.name+'\', ';
        update_query += 'phone = \''+data.phone+'\', ';
        update_query += 'cdate = \''+dparts[2]+'-'+dparts[1]+'-'+dparts[0]+'\', '; 
        update_query += 'location = \''+data.location+'\' where camp_id = '+data.camp_id+' and bbid = '+data.bbid;

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