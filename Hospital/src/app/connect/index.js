const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const db = require('../connect/env');
const client = require('../connect/env');
const app = express();
app.use(function(req,res,next){

    res.header('Access-Control-Allow-Origin',"*");
  
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  
    res.header('Access-Control-Allow-Headers','Content-Type');
  
    next();
  
  });

app.use(cors());
app.use(bodyparser.json());

// Connection
db.connect(err => {
    if (err) { console.log('err'); }
    console.log('database Connected....');
})
 module.get=(app.get);
// app.get('/Appointment',(req,res)=>{
//     res.send('get appointment-list');

// }
// );
app.get('/Appointment', (req, res) => {
    let qr = `Select * from public."Appointment"`
    db
        .query({
            // rowMode: "array",
            text: qr
        })
        .then(result => {
            
            var data1 = []; 
            for (var i = 0; i < result.rows.length; i++) {
                data1.push({
                    Appointmentid: result.rows[i].Appointmentid,
                    Fullname: result.rows[i].Fullname,
                    Phone: result.rows[i].Phone,
                    Email: result.rows[i].Email,
                    Age:result.rows[i].Age,
                    Appointmentdate:result.rows[i].Appointmentdate,
                    Appointmenttime:result.rows[i].Appointmenttime

                });
            }
            res.send(
              
                data1
            );
            
        })
        .catch(err => console.log(err, 'errs'));
});

app.listen(3000, () => {
    console.log('Server Running');
})