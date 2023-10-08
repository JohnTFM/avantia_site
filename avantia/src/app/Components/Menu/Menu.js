
import './Menu.css'
import LogoType from "@/app/Components/Menu/LogoType/LogoType";
import Link from "next/link";
import MenuLinkClient from "@/app/Components/Menu/MenuLink/MenuLink.client";

export default function Menu(){
    return <header className={"menu"}>
        <div className={"logoTypeContainer"}>
    <LogoType></LogoType>
        </div>
        <div className={"links-group "}>
            <MenuLinkClient name={"Home"}></MenuLinkClient>
            <MenuLinkClient name={"Serviços"}></MenuLinkClient>
            <MenuLinkClient name={"Contatos"}></MenuLinkClient>
        </div>
    </header>
}
