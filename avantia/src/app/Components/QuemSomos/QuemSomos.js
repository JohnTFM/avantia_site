import '../QuemSomos/QuemSomos.css'

export default function QuemSomos(){

    return(
        <section className='BackGroundQmSomos'>
            <div className='Alinhar-Tudo'>
                    <div className='GloboDetalhe'> <img src='/imagens/GloboDel.png' className='GloboEdit'/></div>   
                    <div className='alinharDoisTextos'>
                        <div className='QuemSomos'>Quem somos?</div>
                        <div className='TextqmSom'>A Avantia é uma empresa de tecnologia dedicada a trazer
                                                inovações e soluções digitais para empresas de todo o Brasil e mundo afora!
                                                Nossa equipe apaixonada, ágil e ambiociosa está pronta para encarar todo tipo 
                                                de desafio e agregar cada vez mais valor ao mercado de software brasileiro.</div>
                    </div>
            </div>
        </section>
    )

}
