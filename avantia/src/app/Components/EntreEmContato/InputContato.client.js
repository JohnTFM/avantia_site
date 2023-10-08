"use client"
import './EntreEmContato.css'
import {useState} from "react";
import {Formatador} from "@/app/Util/Formatador";
export default function InputContatoClient({label,tipo,setFunction}){
    const [val,setVal] = useState();


    if(tipo==="text-area"){
        return <div className={"input-contato"}>
            <span>{label}</span>
            <textarea value={val} onChange={changeResolve(tipo)}
                      placeholder="Digite aqui ..."
                      data-blocked="true" ></textarea>
        </div>
    }
    function changeResolve(t){
        if(t==="tel"){
            return (e)=>{
                setVal(Formatador.formatPhoneNumber(e.target.value))
                setFunction(label.toLowerCase().replace("*",""),Formatador.formatPhoneNumber(e.target.value))
            }
        }



        return (e)=>{
            setVal(e.target.value)
            setFunction(label.toLowerCase().replace("*","").replace("?",""),e.target.value)
        }
    }
   return <div className={"input-contato"}>
       <span>{label}</span>
       <input value={val} onChange={changeResolve(tipo)} placeholder={`Digite o seu ${label.toLowerCase().replace("*","")}`}  type={tipo}/>
   </div>
}