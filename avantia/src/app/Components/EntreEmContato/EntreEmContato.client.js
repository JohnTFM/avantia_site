"use client"
import './EntreEmContato.css'
import InputContatoClient from "@/app/Components/EntreEmContato/InputContato.client";
import {Formatador} from "@/app/Util/Formatador";
import {useState} from "react";

export default function EntreEmContatoClient(){
    const [form,setForm] = useState({
        nome : "",
        email: "",
        telefone: "",
        "como podemos ajudar": ""
    });

    function setFormGeneric(field,val){
        setForm((prevState)=>{
            return {
                ...prevState,
                [field] : val
            }
        });
        console.log(form)

    }

function enviar(e){
    e.preventDefault();

    alert(form["como podemos ajudar"])
}


    return <section className={"entre-em-contato-sec"}>
        <header className={"emc-title"} >Entre em contato conosco!</header>
        <div className={"ideia-redes-container"}>

            <div >
                <p className={"upper-title"}  >Nos diga a sua ideia</p>
                <div style={
                    {
                        height: `5px`,
                        width : `400px`,
                        backgroundColor: "white",
                        borderRadius: "15px",
                        marginBottom: "30px"
                    }
                }></div>
                <div className={"ideia"}>
                    <InputContatoClient setFunction={setFormGeneric} label={"*Nome"} tipo={"email"}/>

                    <InputContatoClient setFunction={setFormGeneric} label={"*Email"} tipo={"email"}/>
                    <InputContatoClient setFunction={setFormGeneric} label={"*Telefone"} tipo={"tel"}/>
                    <InputContatoClient setFunction={setFormGeneric} label={"*Como podemos ajudar?"} tipo={"text-area"}/>
                    <button className={"enviar-contato"} onClick={enviar} >

                        Enviar
                    </button>

                </div>
            </div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end"
            }}>
                <p className={"upper-title"}  style={{textAlign: "end"}} >Contatos</p>
                <div style={
                    {
                        height: `5px`,
                        width : `400px`,
                        backgroundColor: "white",
                        borderRadius: "15px",
                        marginBottom: "30px"
                    }
                }></div>
            <div className={"redes-container"}>
                <a className={"no-decoration"} target={"_blank"} href={`https://wa.me/63999766727?text=heelo worls`}>
                    <span style={{
                        position: "relative",
                        bottom: "30px"
                    }}>(63) 99976-6727</span>
                    <img src={"/imagens/1.svg"}/>
                </a>
                <a className={"no-decoration"} target={"_blank"} href={"https://www.linkedin.com/company/avantia-sofware/?viewAsMember=true"}>
                    <span style={{
                        position: "relative",
                        bottom: "30px"
                    }}>avantia_software</span>
                    <img src={"/imagens/2.svg"}/>

                </a>
                <a className={"no-decoration"} target={"_blank"} href={"https://www.instagram.com/avantia_software/"}>
                    <span style={{
                        position: "relative",
                        bottom: "38px"
                    }}>@avantia_software</span>
                    <img src={"/imagens/3.svg"}/>

                </a>
                <a className={"no-decoration"} target={"_blank"} href={"mailto:avantiasoftware.com"}>
                    <span style={{
                        position: "relative",
                        bottom: "48px",
                        fontSize: "18px"
                    }}>avantiasoftware@hotmail.com</span>
                    <img src={"/imagens/4.svg"}/>

                </a>



            </div>

            </div>
        </div>
    </section>
}