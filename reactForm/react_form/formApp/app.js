const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const port = 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());


app.post("/send", function(req, resp){
  const output = `
     <p>You have a new message</p>
     <h3> - message details - </h3>
     <ul>
       <li>Name: ${req.body.name}</li>
       <li>Email: ${req.body.email}</li>
       <li>Age: ${req.body.age}</li>
       <li>Customer experience: ${req.body.experience}</li>
       <li>Would they recommend us: ${req.body.recommendation}</li>
     </ul>
     <h3>Message:</h3>
     <p>${req.body.comments}</p>
   `;

   let transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'customer@thegridcyberlounge.com', // generated ethereal user
      pass: 'Admin1840!' // generated ethereal password
    },
    tls: {
      rejectUnauthorized:false
    }
  });

  // send mail with defined transport object
  let mailOptions = {
    from: '"Nodemailer Contact" <customer@thegridcyberlounge.com>', // sender address
    to: "zach@gridsystemsinc.com, info@thegridcl.com", // list of receivers
    subject: "Node contact request", // Subject line
    text: "Hello world?", // plain text body
    html: output // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  })
});

app.listen(port, () => console.log(`server is running, Zac...`))
