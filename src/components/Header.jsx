import {useState} from "react";
import {IoMdMenu} from "react-icons/io";
import Logo from './Logo';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import ArtigoPDF from "../assets/Artigo.pdf";





const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header>


            <div className={"redes sticky top-0"}>
                <a href={"https://www.instagram.com"} target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                <a href={"https://www.facebook.com"} target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
                <a href={"https://www.linkedin.com/in/yagolinos/"} target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                <a href={"https://www.youtube.com/channel/UCGlJaXXT_Mhab1kJ5PGVNFw"} target="_blank" rel="noopener noreferrer"><FaYoutube/></a>
            </div>

            <div className={"flex items-center justify-between "}>



                <Logo/>

                {/* Menu PC*/}
                <nav className="hidden sm:block py-8">
                    <a href={ArtigoPDF} download={"Artigo.pdf"} className={"baixar"}>LER ARTIGO COMPLETO</a>
                </nav>

                <button onClick={() => setIsOpen(!isOpen)} className={"block sm:hidden text-white text-4xl px-4"}>
                    <IoMdMenu/>
                </button>

            </div>

            {/* Menu Mobile*/}
            <nav className={`${isOpen ? "block" : "hidden"}  mobile`}>
                <a href={ArtigoPDF} download={"Artigo.pdf"} >LER ARTIGO COMPLETO</a>


            </nav>

        </header>
    )



}


export default Header