var db = require('../db')();

module.exports = (req, res) => {
    console.log(JSON.stringify(req.body.bb_address));

    data = req.body
    let insertbb = 'INSERT INTO bloodbank (name, email, phone, city, address, pincode) VALUES(\''+
                    data.bb_name+'\', \''+
                    data.bb_email+'\', \''+
                    data.bb_phone+'\', \''+
                    data.bb_city+'\', \''+
                    data.bb_address+'\', \''+
                    data.bb_pincode+'\')';
    
    let insertmgr = 'insert into manager (email, fname, lname, phone, password, bbid) values(\''+
                    data.mgr_email+'\', \''+
                    data.mgr_fname+'\', \''+
                    data.mgr_lname+'\', \''+
                    data.mgr_phone+'\', \''+
                    data.mgr_pass+'\',';


    db.query(insertbb, (error, results, fields) => {
        if(error) throw error;

        insertmgr = insertmgr+results.insertId+')';
        console.log(insertmgr)
        db.query(insertmgr, (error, results, fields) => {
            if(error) throw error
            console.log(results)
        })
    })
    
    res.status(200).json({ 'message': 'success'});
}