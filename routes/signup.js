var db = require('../db')();

module.exports = (req, res) => {
    console.log(JSON.stringify(req.body.bb_address));

    data = req.body;
    
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

    let check_email_query = 'select * from manager where email = \''+data.mgr_email+'\'';
    let check_bb_query = 'select * from bloodbank where name like \''+data.bb_name+'\'';

    //checking fot existing manager email
    db.query(check_email_query, (error, results, fields)=>{
        if(error){
            res.status(400).json({ 'message': 'no data found'});
            console.log(error);
        }else if(results.length > 0){
            res.status(201).json({ 'message' : 'Manager email already exists'});
        }else{
            //checking for bloodbank's name
            db.query(check_bb_query, (error, results, fields)=>{
                if(error){
                    res.status(400).json({ 'message': 'no data found'});
                    console.log(error);
                }else if(results.length > 0){
                    res.status(202).json({ 'message' : 'Bloodbank name already exists'});
                }else{
                        //inserting data into bloodbank
                        db.query(insertbb, (error, results, fields) => {
                            if(error) throw error;
                            insertmgr = insertmgr+results.insertId+')';
                            console.log(insertmgr);
                            //inserting manager
                            db.query(insertmgr, (error, results, fields) => {
                                if(error) throw error;
                                console.log(results);
                                res.status(200).json({ 'message': 'success'});
                            });
                        });
                    }
                }); 
            }
        });
    }

