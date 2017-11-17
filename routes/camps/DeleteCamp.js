var db = require('../../db')();

module.exports = (req, res) => {

    console.log('delete from '+req.body.bbid + ' --> '+ req.body.camp_id);

    if( req.body.bbid && req.body.camp_id ){
        let delete_query = 'delete from camps where camp_id = \''+req.body.camp_id+'\' and bbid = '+req.body.bbid;
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