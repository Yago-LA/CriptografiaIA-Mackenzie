import {Link} from 'react-router-dom'
import Header from "../components/Header";
import { Navigate } from "react-router-dom";

function MinhaPagina() {
    return <Navigate to="/destino" replace />;
}

const NotFoundPage = () => {
    return (
        <div>
            <Header/>
            <h1>PÁGINA NÃO ENCONTRADA</h1>
            <Link to={"/"}>
                <button style={{ cursor: 'pointer' }} >Voltar</button>
            </Link>
            <Navigate to="/" replace />
        </div>
    )
}

export default NotFoundPage