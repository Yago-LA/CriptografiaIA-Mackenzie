import {Link} from "react-router-dom";


const Nav = () => {
    return (
        <div className="">
            <Link to={"/about"}>Sobre</Link>
            <Link to={"/about"}>Projetos</Link>
            <Link to={"/about"}>Blog</Link>
        </div>
    )
}

export default Nav