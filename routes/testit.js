var db = require('../db')();

module.exports = (req, res) => {
    console.log(req.query.pack)
    let test_insert = 'INSERT INTO test(pack) values(\''+req.query.pack+'\')';
    db.query(test_insert, (error, results, fields) => {
        if(error) throw error;

        console.log('success')
        console.log(results)
    })
    
    res.status(200).json({ 'message': 'success'});
}