"use client";
import {useState} from "react";


import Link from "next/link";

import './MenuLink.css'
export default function MenuLinkClient({name}){

const [isVisible,setVisible] = useState(false);


    return  <span className={"menuLink"} onMouseEnter={()=>setVisible(true)} onMouseLeave={()=>setVisible(false)} >
                <Link  className={"no-decoration"} href={`\\#${name}`}>{name}&nbsp;</Link>
                    <svg
                            className={"menuIcon"}
                            style={
                            isVisible?
                                {opacity : "1"}
                                :
                                {opacity: "0"}
                            }
                        width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.0313 27.5L7.8125 25.2812L18.0938 15L7.8125 4.71875L10.0313 2.5L22.5313 15L10.0313 27.5Z" fill="white"/>
                </svg>

            </span>
}