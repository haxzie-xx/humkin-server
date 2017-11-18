
var express = require('express');
var mysql = require('mysql');
var db = require('./db');
var bodyParser = require('body-parser');
var signup = require('./routes/signup');
var login = require('./routes/login');
//donor imports
var createDonor = require('./routes/donor/createDonor');
var allDonors = require('./routes/donor/allDonors');
var donorDetails = require('./routes/donor/donorDetails');
var deleteReg = require('./routes/donor/deleteRegistration');
var checkAdhaar = require('./routes/donor/checkAdhaar');
var addToRegistry = require('./routes/donor/addToRegistry');
var updateDonor = require('./routes/donor/updateDonor');
//nurses imports
var createNurse = require('./routes/nurses/createNurse');
var checkNurseEmail = require('./routes/nurses/checkNurseEmail');
var allNurses = require('./routes/nurses/allNurses');
var nurseDetails = require('./routes/nurses/nurseDetails');
var updateNurse = require('./routes/nurses/updateNurse');
var deleteNurse = require('./routes/nurses/deleteNurse');
var checkNurseId = require('./routes/nurses/checkNurseId');
//Storage imports
var storageDetails = require('./routes/storage/storageDetails');
//donation imports
var checkRegDonor = require('./routes/donation/checkRegDonor');
var createDonaion = require('./routes/donation/newDonation');
var donationRecord = require('./routes/donation/donationRecord');
//camps imports
var createCamp = require('./routes/camps/createCamp');
var allCamps = require('./routes/camps/allCamps');
var updateCamp = require('./routes/camps/EditCamp');
var deleteCamp = require('./routes/camps/DeleteCamp');
var campDetails = require('./routes/camps/campDetails');
//hospital apis
var createHospital = require('./routes/hospitals/createHospital');
var hospitalDetails = require('./routes/hospitals/hospitalDetails');
var updateHospital = require('./routes/hospitals/updateHospital');
var deleteHospital = require('./routes/hospitals/deleteHospital');
var allHospitals = require('./routes/hospitals/allHospitals');
var checkHName  = require('./routes/hospitals/checkHName');

//home page imports
var campList = require('./routes/campList');
var bloodbanks = require('./routes/bloodBanks');

//Running Port
const port = 8081;

let app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
})); // support encoded bodies

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/', (req, res) => {
    console.log(JSON.stringify(req.body));
    res.status(200).json({
        'message': 'success'
    });

});

app.get('/', (req, res)=>{
    res.status(200).send('Server Online!')
})

app.post('/signup', signup);
app.post('/login', login);
app.get('/camp_list',campList)
app.post('/bloodbanks', bloodbanks);

//donor apis
app.post('/create_donor', createDonor);
app.get('/all_donors/:bbid', allDonors);
app.get('/donor_details/:bbid/:adhaar', donorDetails );
app.post('/delete_donor', deleteReg );
app.post('/check_adhaar', checkAdhaar);
app.post('/add_to_registry', addToRegistry);
app.post('/update_donor', updateDonor);

//nurses apis
app.post('/create_nurse', createNurse);
app.post('/check_nurse_email', checkNurseEmail);
app.get('/all_nurses/:bbid', allNurses);
app.get('/nurse_details/:bbid/:nid', nurseDetails);
app.post('/update_nurse', updateNurse);
app.post('/delete_nurse', deleteNurse );
app.post('/check_nurse_id', checkNurseId);
//Storage Api
app.get('/storage_details/:bbid', storageDetails);
//donation apis
app.post('/check_registered_donor', checkRegDonor);
app.post('/create_donation', createDonaion);
app.post('/donation_record/:bbid', donationRecord);
//camp apis
app.post('/create_camp', createCamp);
app.post('/all_camps/:bbid', allCamps);
app.post('/update_camp', updateCamp);
app.post('/delete_camp', deleteCamp );
app.get('/camp_details/:bbid/:camp_id', campDetails);
//hospital apis
app.post('/create_hospital', createHospital);
app.get('/all_hospitals/:bbid', allHospitals);
app.post('/update_hospital', updateHospital);
app.post('/delete_hospital', deleteHospital );
app.post('/check_hospital_name', checkHName);
app.get('/hospital_details/:bbid/:hid', hospitalDetails);


app.listen(port, () => {
    console.log('Server running at localhost:'+port);
});
