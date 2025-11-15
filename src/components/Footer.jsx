import {useState} from "react";
import {IoMdMenu} from "react-icons/io";
import Logo from './Logo';
import {FaInstagram} from "react-icons/fa";
import {FaFacebook} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <Logo/>
            <p>R. da Consolação, 930 - Consolação, São Paulo - SP, 01302-907 // Telefone: (--) 2114-8000</p>
            <div className={"flex text-3xl gap-2"}>
                <a href={"https://www.instagram.com"} target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                <a href={"https://www.facebook.com"} target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
                <a href={"https://www.linkedin.com/"} target="_blank"
                   rel="noopener noreferrer"><FaLinkedin/></a>
                <a href={"https://www.youtube.com/channel/UCGlJaXXT_Mhab1kJ5PGVNFw"} target="_blank" rel="noopener noreferrer"><FaYoutube/></a>
            </div>
        </footer>
    )
}

export default Footer;