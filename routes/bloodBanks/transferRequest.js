var db = require('../../db')();

module.exports = (req, res) => {

    data = req.body;

    if( data.bbid && data.hid && data.pin && data.quantity && data.blood ){
        let query = 'select * from hospitals where hid = '+data.hid+' and pin = \''+data.pin+'\'';

        console.log(query);
        db.query(query, (error, results, response)=>{
            if (error) throw error;
            if(results.length === 0){
                res.status(201).json({ 'message' : 'invalid hid and secret key '});
            }else{
                let transfer = 'insert into transfer(hid, bbid, quantity, blood) values( ';
                transfer += data.hid+', '+data.bbid+', '+data.quantity+', \''+data.blood+'\')';
                db.query(transfer, (e, r, f)=>{
                    if(e){
                        res.status(400).json({ 'message' : 'Unable to write transfer record'});
                        console.log(error);
                    }

                    res.status(200).json({ 'message' : 'success'});
                })
            }
        })
    }
} 