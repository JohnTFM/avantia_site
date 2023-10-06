import './NossosServicos.css'
import ServicoCard from "@/app/Components/NossosServicos/ServicoCard/ServicoCard";

export default function  NossosServicos(){
    return <section className={"nossos-servicos-sec"}>
        <span className={"ns-title"}>Nossos Servicos</span>
        <ServicoCard caminhoImg={"/ns-images/web_system.png"} titulo={"WebSystem"}>
            Sistemas Web, disponíveis 24h por dia, acessíveis por navegadores,  com sites que se adaptam ao formato do dispositivo! Aqui trazemos uma solução tecnológica para qualquer problema que você ou sua organização estiver passando.
            <br/><span>Exemplos: Sistema de Gerenciamento de Rifa, Sistema de Registro de Fazendas, Sistema de Tramitação de Processos Eletrônicos.</span>
        </ServicoCard>
        <ServicoCard caminhoImg={"/ns-images/institucional.png"} titulo={"Institucional"} reverse={true}>
            Website que mostra quem você ou sua empresa é, agrega valor, traz confiança e denota profissionalismo da entidade detentora do site.
            <br/><span>Exemplos: home pages de universidades, sites de escritório de advocacia, sites de empresas prestadoras de serviços diversos, etc...</span>
        </ServicoCard>

        <ServicoCard caminhoImg={"/ns-images/mobile.png"} titulo={"Mobile"}>
            Soluções que consistem em um software pensado para funcionar no ambiente mobile.
            Aqui, sua tecnologia estará na palma da mão do seu cliente!
            <br/><span>Exemplos: ifood, Uber, sites responsivos, etc...</span>
        </ServicoCard>
    </section>
}