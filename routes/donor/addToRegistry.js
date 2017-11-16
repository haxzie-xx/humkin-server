var db = require('../../db')();

module.exports = (req, res) => {

    let bbid = req.body.bbid;
    let adhaar = req.body.adhaar;

    if(bbid && adhaar){
        let dbQuery = 'insert into registry values (\''+adhaar+'\', '+bbid+')';
        db.query(dbQuery, (error, results, fields) => {
            if(error) throw error;

            res.status(200).json({ 'message' : 'success'});
        })
    }else{
        res.status(400).send('error');
    }
}