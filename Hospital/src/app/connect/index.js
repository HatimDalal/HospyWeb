const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");

const db = require("../connect/env");
const client = require("../connect/env");
const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");

  res.header("Access-Control-Allow-Headers", "Content-Type");

  next();
});

app.use(cors());
app.use(bodyparser.json());

// Connection
db.connect((err) => {
  if (err) {
    console.log(err, "err");
  }
  console.log("database Connected....");
});
// module.get = app.get;
// client.query('/Appointment',(req,res)=>{

// console.log('get appointment-list');

// }
// );
app.get("/Appointment", (req, res) => {
  let qr = `Select * from public."Appointment"`;
  db.query({
    // rowMode: "array",
    text: qr,
  })
    .then((result) => {
      var data1 = [];
      for (var i = 0; i < result.rows.length; i++) {
        data1.push({
          Appointmentid: result.rows[i].Appointmentid,
          Fullname: result.rows[i].Fullname,
          Phone: result.rows[i].Phone,
          Email: result.rows[i].Email,
          Age: result.rows[i].Age,
          Appointmentdate: result.rows[i].Appointmentdate,
          Appointmenttime: result.rows[i].Appointmenttime,
        });
      }
      res.send(data1);
    })
    .catch((err) => console.log(err, "errs"));
});

app.listen(3000, () => {
  console.log("Server Running");
});

app.get("/doctor", (req, res) => {
  let qr = `Select * from public."doctor"`;
  client
    .query({
      text: qr,
    })
    .then((result) => {
      var data1 = [];
      for (var i = 0; i < result.rows.length; i++) {
        data1.push({
          name: result.rows[i].name,
          degree: result.rows[i].degree,
          time: result.rows[i].time,
        });
      }
      res.send(data1);
    })
    .catch((err) => console.log(err, "errs"));
});

app.post("/Bookingnew", (req, res) => {
  let qr = `INSERT INTO public."Appointment"(
    "Fullname", "Phone", "Email", "Age", "Appointmentdate", "Appointmenttime")
    VALUES (${Fullname}, ${Phone}, ${Email}, ${Age}, ${Appointmentdate}, ${Appointmenttime});`;
  client
    .query({
      text: qr,
    })
    .then((result) => {
      var data1 = [];
      for (var i = 0; i < result.rows.length; i++) {
        data1.push({
          name: result.rows[i].name,
          degree: result.rows[i].degree,
          time: result.rows[i].time,
        });
      }
      res.send(data1);
    })
    .catch((err) => console.log(err, "errs"));
});

app.post("/Bookingnew", (req, res) => {
  let qr = `DELETE FROM public."Appointment"
	WHERE Fullname='${Fullname}';`;
  client
    .query({
      text: qr,
    })
    .then((result) => {
      var data1 = [];
      for (var i = 0; i < result.rows.length; i++) {
        data1.push({
          name: result.rows[i].name,
          degree: result.rows[i].degree,
          time: result.rows[i].time,
        });
      }
      res.send(data1);
    })
    .catch((err) => console.log(err, "errs"));
});
// app.listen(3000, () => {
//   console.log("Server Running");
// });
