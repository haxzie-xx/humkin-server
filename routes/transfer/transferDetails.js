var db = require('../../db')();

module.exports = (req, res) => {

    if(req.params.tid){

        let tquery = 'select t.tid, t.hid, h.name as hname, h.location as hlocation, h.phone as hphone, t.quantity, ';
            tquery += 't.blood, blood_qty(t.blood, t.bbid)*1000 as available, t.status from transfer t, hospitals h ';
            tquery += 'where t.tid = '+req.params.tid+' and t.bbid = '+req.params.bbid+' and t.hid = h.hid';

        console.log(tquery);
        db.query(tquery, (error, results, fields)=> {
            if(error){
                res.status(400).send(error);
            }

            console.log(results);
            res.status(200).json(results);
        });
    }
}