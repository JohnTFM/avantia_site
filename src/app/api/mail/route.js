import {NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer";
import NextCors from 'nextjs-cors';

export async function OPTIONS(req){
    return new Response(null,{
        headers :{
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
    })
}
export async function POST(req){



    const emailData = await req.json();

    if(!emailData.nome){
        return new Response('Bad request amigao',{
            status: 400,
            headers:{
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            }
        })
    }

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



    return new Response('Hello',{
        status: 200,
        headers:{
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
    })

}