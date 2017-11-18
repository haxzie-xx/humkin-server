var db = require('../../db')();

module.exports =(req, res) => {

    data = req.body;

    if(data.bbid){

        let create_query = 'insert into hospitals (bbid, name, phone, location, address, pin) values('+
                            data.bbid+', '+
                            '\''+data.name+'\', '+
                            '\''+data.phone+'\', '+
                            '\''+data.location+'\', '+
                            '\''+data.address+'\', '+ data.pin +')';
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