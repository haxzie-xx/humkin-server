var db = require('../../db')();

module.exports = (req, res) => {

    console.log('delete hospital by '+req.body.bbid + ' --> '+ req.body.hid);

    if( req.body.bbid && req.body.hid ){
        let delete_query = 'delete from hospitals where hid = '+req.body.hid;
        db.query(delete_query, (error, results, fields) => {
            if (error) throw error;
            
            console.log(fields)
            console.log(JSON.stringify(results));
            res.status(200).json({ 'message' : 'success '});
        }) 
    }else{
        console.log('No params for delete');
    }
}