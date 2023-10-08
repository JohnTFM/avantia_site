
import Menu from "@/app/Components/Menu/Menu";
import QuemSomos from "@/app/Components/QuemSomos/QuemSomos";
import Home from "@/app/Components/Home/Home";
import NossosServicos from "@/app/Components/NossosServicos/NossosServicos";
import EntreEmContatoClient from "@/app/Components/EntreEmContato/EntreEmContato.client";

export default function Avantia(){
    return <main>
        <Home></Home>
        <QuemSomos></QuemSomos>
        <NossosServicos></NossosServicos>
        <EntreEmContatoClient></EntreEmContatoClient>
    </main>
}