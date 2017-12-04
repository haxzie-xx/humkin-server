var db = require('../db')();
var CryptoJS = require("crypto-js");

module.exports = (req, res) => {

    console.log('Login Request : ' + JSON.stringify(req.body));

    //checking request params
    if(!req.body.email && !req.body.pass){
        res.status().json({ 'message': 'Enter email and password'});
    }else{
        let email = req.body.email;
        let pass = req.body.password;

        //Building Login query  
        let login_query = 'select * from manager where email=\''+email+'\' and password=\''+pass+'\'';
        console.log(login_query);
        db.query(login_query, (error, results, fields) => {
           
            if(error) {
                res.status(400).json({ 'message' : 'invalid credentials' });
                console.log(error);
            };
            
            if(results.length > 0){
                console.log("login success");
                res.status(200).json({
                    'email' : results[0].email,
                    'name' : results[0].fname+' '+results[0].lname,
                    'phone' : results[0].phone,
                    'bbid' : results[0].bbid
                });
            }else{
                console.log("error");
                res.status(201).json({ 'message' : 'invalid credentials' });
            }
            console.log(results);
        });

    }
    

}