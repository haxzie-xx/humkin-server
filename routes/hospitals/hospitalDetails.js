var db = require('../../db')();

module.exports = (req, res) =>{

    let hospital_query = 'select * from hospitals where hid = '+req.params.hid;

    db.query(hospital_query, (error, results, fields) => {
        if(error) {
            throw error;
        };

        res.status(200).json(results);
    });
}