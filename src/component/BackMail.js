import React from 'react'

export default function BackMail() {
    //Requerimos el paquete
    var nodemailer = require('nodemailer');

    //Creamos el objeto de transporte
    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tucorreo@gmail.com',
        pass: 'tucontraseña'
    }
    });

    var mensaje = "Hola desde nodejs...";

    var mailOptions = {
    from: 'tucorreo@gmail.com',
    to: 'mi-amigo@yahoo.com',
    subject: 'Asunto Del Correo',
    text: mensaje
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email enviado: ' + info.response);
    }
    });
}
