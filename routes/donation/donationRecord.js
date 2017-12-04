var db = require('../../db')();

module.exports = (req, res) =>{

    console.log('new Request '+JSON.stringify(req.params));
    if(req.params.bbid){
        let donor_query = 'select dn.did, d.fname, d.lname, DATE_FORMAT(dn.donation_date, \'%d/%m/%Y\') as don_date, d.blood, dn.quantity, n.fname as nurse_name '+
                          'from nurses n, donor d, donation dn '+
                          'where  dn.adhaar = d.adhaar and dn.nid = n.nid and dn.bbid = '+req.params.bbid+' order by dn.donation_date desc limit '+req.body.from+', '+req.body.to;
            console.log('====================================');
            console.log(donor_query);
            console.log('====================================');
                 db.query(donor_query, (error, results, fields) => {
                if(error) throw error;
                console.log('All donation list sent');
                res.status(200).json(results);
            });
    }else{
        console.log("error");
        res.status(400).end();
    }
    
}