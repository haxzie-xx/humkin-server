var db = require('../../db')();

module.exports = (req, res) => {

    console.log('all camps : req  '+JSON.stringify(req.params));
    if(req.params.bbid){
        let camps_query = 'select camp_id, name, phone, location, DATE_FORMAT(cdate, \'%d/%m/%Y\')  as cdate, DATE_FORMAT(created, \'%d/%m/%Y\') as created from camps where bbid = '+req.params.bbid+' order by created desc';
            db.query(camps_query, (error, results, fields) => {
                if(error) throw error;
                console.log('All camps list sent');
                res.status(200).json(results);
            });
    }else{
        console.log("error");
        res.status(400).end();
    }
}