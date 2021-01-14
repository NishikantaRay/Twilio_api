// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
    
//     res.send('Hello World')
// })
 
// app.listen(3000)

const sgMail = require('@sendgrid/mail');
const { response } = require('express');
const API_KEY="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";
    sgMail.setApiKey(API_KEY)
    
    const message ={
        to:'nishikantaray1@gmail.com',
        from:'nishikantaray1@gmail.com',
        subject:'Hello from sendgrid',
        text:'hello from sendgrid',
        html:'https://youtu.be/uJ6WU-u4i3w'
    };
    sgMail
    .send(message)
    .then(response=>console.log('Email sent '))
    .catch(error=>console.log(error.message));