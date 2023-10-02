import Link from "next/link";

import './MenuLink.css'
export default function MenuLink({name}){

    return  <span className={"menuLink"} >
                <Link  className={"no-decoration"}  href={`\\#${name}`}>{name}</Link>
                    <svg className={"menuIcon"} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0313 27.5L7.8125 25.2812L18.0938 15L7.8125 4.71875L10.0313 2.5L22.5313 15L10.0313 27.5Z" fill="white"/>
                </svg>

            </span>
}