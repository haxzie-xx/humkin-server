var db = require('../db')();

module.exports = (req, res) =>{

    console.log('new Request '+JSON.stringify(req.body));
    let query = 'select b.bbid, b.name, b.city, s.ap, s.an, s.bp, s.bn, s.abp, s.abn, s.op, s.o_n from bloodbank b, storage s where b.bbid = s.bbid ';
    if(req.body.name && req.body.location && req.body.blood ){

        query += 'and b.name like \''+req.body.name+'\%\' ';
        query += 'and b.city like \'\%'+req.body.location+'\' ';
        query += 'and s.'+ req.body.blood +' > 0.1 ';

    }else if(req.body.name && req.body.location){

        query += 'and b.name like \''+req.body.name+'\%\' ';
        query += 'and b.city like \'\%'+req.body.location+'\' ';

    }else if(req.body.name && req.body.blood){

        query += 'and b.name like \''+req.body.name+'\%\' ';
        query += 'and s.'+ req.body.blood +' > 0.1 ';

    }else if(req.body.location && req.body.blood){

        query += 'and b.city like \'\%'+req.body.location+'\' ';
        query += 'and s.'+ req.body.blood +' > 0.1 ';

    }else if(req.body.name){

        query += 'and b.name like \''+req.body.name+'\%\' ';

    }else if(req.body.location){

        query += 'and b.city like \'\%'+req.body.location+'\' ';

    }else if(req.body.blood){

        query += 'and s.'+ req.body.blood +' > 0.1 ';

    }

    query += ' order by b.name ';
    
    console.log(query);

    db.query(query, (error, results, fields) => {
        if(error) {
            res.status(400).send(error);
            throw error;
        }
        console.log(results);
        res.status(200).json(results);
    });
    
    
}