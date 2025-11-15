import {Link} from 'react-router-dom'
import Header from "../components/Header";

const NotFoundPage = () => {
    return (
        <div>
            <Header/>
            <h1>PÁGINA NÃO ENCONTRADA</h1>
            <Link to={"/"}>
                <button style={{ cursor: 'pointer' }} >Voltar</button>
            </Link>
        </div>
    )
}

export default NotFoundPage