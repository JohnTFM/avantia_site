import './ServicoCard.css'
export default function ServicoCard({children,caminhoImg,titulo,reverse}){

    return <div className={"servico-card"} style={{flexDirection:reverse?"row-reverse" : "row" }}>
        <img  src={caminhoImg}/>
        <div className={"informative-container"}>
         <span className={"sc-avantia"}>Avantia&nbsp;</span><span className={"sc-titulo"}>{titulo}</span>
        <p className={"informativeP"}>
            {children}
        </p>
        </div>
    </div>

}