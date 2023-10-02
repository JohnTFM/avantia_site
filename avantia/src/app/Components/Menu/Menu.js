import './Menu.css'
import LogoType from "@/app/Components/Menu/LogoType/LogoType";
import Link from "next/link";
import MenuLink from "@/app/Components/Menu/MenuLink/MenuLink";

export default function Menu(){
    return <header className={"menu"}>
        <div className={"logoTypeContainer"}>
    <LogoType></LogoType>
        </div>
        <div className={"links-group "}>
            <MenuLink name={"Home"}></MenuLink>
            <MenuLink name={"Serviços"}></MenuLink>
            <MenuLink name={"Contatos"}></MenuLink>
        </div>
    </header>
}
