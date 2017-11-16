var db = require('../../db')();

module.exports =(req, res) => {

    data = req.body;

    if(data.bbid){

        let create_query = 'insert into donation (adhaar, bbid, nid, quantity) values('+
                            '\''+data.adhaar+'\', '+
                            data.bbid+', '+
                            data.nid+', '+
                            data.quantity+')';

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