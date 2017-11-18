var db = require('../../db')();

module.exports = (req, res) => {

    if(req.body.hid){

        let tquery = 'insert into transfer(hid, bbid, quantity, blood) values( ';
            tquery += req.body.hid+', '+req.body.bbid+', '+req.body.quantity+', \''+req.body.blood+'\')';

        console.log(tquery);
        db.query(tquery, (error, results, fields)=> {
            if(error){
                console.log(error);
                res.status(400).send(error);
            }

            console.log(results);
            res.status(200).json(results);
        });
    }
}