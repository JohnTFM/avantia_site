import {NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer";
export async function POST(req){
     const emailData = await req.json();


    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: 'avantiasoftware@hotmail.com',
            pass: 'Wisner272003'
        }
    });
console.log(emailData)
    const mailOptions = {
        from: 'avantiasoftware@hotmail.com',
        to: 'avantiasoftware@hotmail.com',
        subject: `Email enviado pelo site Avantia`,
        text: `${emailData.nome}, ${emailData.email}, ${emailData.telefone},esta querendo: ${emailData.contexto}`
    };

    console.log(`${mailOptions.subject}`);

    await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });



    return NextResponse.json({funcionando: "OK"})
}