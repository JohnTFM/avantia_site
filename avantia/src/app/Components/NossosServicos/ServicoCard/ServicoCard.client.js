'use client'
import './ServicoCard.css'
import {useEffect, useRef, useState} from "react";

export default function ServicoCardClient({children,caminhoImg,titulo,reverse}){

    const [show,setShow] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // O componente está visível na tela, ative a animação
                    setShow(true);
                } else {
                    // O componente não está visível na tela, defina a opacidade de volta para 0
                    setShow(false);
                }
            });
        }, options);

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);



    return <div
        ref={elementRef}

        className={"servico-card"}  style={{
            flexDirection:reverse?"row-reverse" : "row" ,
            opacity: show?"1" : "0"
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