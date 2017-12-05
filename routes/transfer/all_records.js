var db = require('../../db')();

module.exports = (req, res) =>{

    console.log('new Request '+JSON.stringify(req.params));
    if(req.params.bbid){
        let trecord_query = 'select t.tid, t.hid, h.name, DATE_FORMAT(t.tdate, \'%d/%m/%Y\') as date, t.quantity, t.blood, t.status ';
            trecord_query += ' from transfer t, hospitals h where t.bbid = '+req.params.bbid+' and t.hid = h.hid order by t.tdate desc';
            db.query(trecord_query, (error, results, fields) => {
                if(error) throw error;
                console.log('All transfer records sent');
                console.log(results);
                res.status(200).json(results);
            });
    }else{
        console.log("error");
        res.status(400).end();
    }
    
}