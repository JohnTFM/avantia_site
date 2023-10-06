'use client'
import './ServicoCard.css'
import {useEffect, useRef, useState} from "react";

export default function ServicoCardClient({children,caminhoImg,titulo,reverse}){

    const [show,setShow] = useState(false);
    const [volta,setVolta] =useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const entryOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.25, // Alterado para 0.25 para a entrada (0 -> 1)
        };


        const entryObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log("Entrou")
                    // O componente está visível na tela, ative a animação
                    setShow(true);
                    setVolta(true)
                }
                if (!entry.isIntersecting) {
                    console.log("Saiu")
                    // O componente está visível na tela, ative a animação
                    setShow(false);
                }
            });
        }, entryOptions);


        if (elementRef.current) {
            entryObserver.observe(elementRef.current);
        }
        
    }, []);




    return <div
        ref={elementRef}

        className={"servico-card"}  style={{
            flexDirection:reverse?"row-reverse" : "row" ,
            opacity: show?"1" : "0",
        top: volta?"0px": "200px"
    }}>
        <img  src={caminhoImg}/>
        <div className={"informative-container"}>
        <span> <span className={"sc-avantia"}>Avantia&nbsp;</span><span className={"sc-titulo"}>{titulo}</span></span>
        <p className={"informativeP"}>
            {children}
        </p>
        </div>
    </div>


}