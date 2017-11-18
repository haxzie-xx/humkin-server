var db = require('../db')();

module.exports = (req, res) =>{

    console.log('new Request '+JSON.stringify(req.params));
    
        let _query = 'select camp_id, name, phone, location, DATE_FORMAT(cdate, \'%d/%m/%Y\')  as cdate from camps order by cdate';
            db.query(_query, (error, results, fields) => {
                if(error) {
                    res.status(400).sennd(error);
                    throw error;
                }
                console.log('All camp list sent');
                res.status(200).json(results);
            });
    
    
}