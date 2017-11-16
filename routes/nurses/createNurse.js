var db = require('../../db')();

module.exports =(req, res) => {

    data = req.body;

    if(data.bbid){

        let create_query = 'insert into nurses (bbid, fname, lname, email, phone, gender, location) values('+
                            data.bbid+', '+
                            '\''+data.fname+'\', '+
                            '\''+data.lname+'\', '+
                            '\''+data.email+'\', '+
                            '\''+data.phone+'\', '+
                            '\''+data.gender+'\', '+
                            '\''+data.location+'\' )';
        console.log(create_query);

        db.query(create_query, (error, results, fields) => {
            if(error) throw error;

            console.log(results);
            res.status(200).json({ 'message' : 'success'});
        })

    }else{
        res.end();
    }
}