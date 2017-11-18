var db = require('../../db')();

module.exports = (req, res) =>{

    console.log('new Request '+JSON.stringify(req.params));
    if(req.params.bbid){
        let hquery = 'select * from hospitals order by name';
            db.query(hquery, (error, results, fields) => {
                if(error) throw error;
                console.log('All hospital list sent');
                res.status(200).json(results);
            });
    }else{
        console.log("error");
        res.status(400).end();
    }
    
}