var db = require('../../db')();

module.exports = (req, res) => {

    if(req.params.bbid){

        let bbquery = 'select b.name as bname, b.city as bcity, b.address as baddress, b.phone as bphone, b.email as bemail, ';
        bbquery += 'm.fname as mfname, m.lname as mlname, m.email as memail, m.phone as mphone, ';
        bbquery += 's.total as tblood, ';
        bbquery += '(select count(*) from registry r where r.bbid = b.bbid) as dcount, ';
        bbquery += '(select count(distinct t.hid) from transfer t where t.bbid = b.bbid) as hcount ';
        bbquery += 'from bloodbank b, manager m, storage s ';
        bbquery += 'where b.bbid = '+ req.params.bbid +' and b.bbid = m.bbid and b.bbid = s.bbid';

        console.log(bbquery);
        db.query(bbquery, (error, results, fields)=> {
            if(error){
                res.status(400).send(error);
            }

            console.log(results);
            res.status(200).json(results);
        });
    }
}