var db = require('../../db')();

module.exports = (req, res) => {

    console.log('====================================');
    console.log('update request --> '+req.body.hid);
    console.log('====================================');
    data = req.body;
    console.log(data);

    if( req.body.hid){
        let update_query = 'update hospitals set ';
        update_query += 'name = \''+data.name+'\', ';
        update_query += 'phone = \''+data.phone+'\', ';
        update_query += 'location = \''+data.location+'\', ';
        update_query += 'address = \''+data.address+'\', pin = '+data.pin+' where hid = '+data.hid;;

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