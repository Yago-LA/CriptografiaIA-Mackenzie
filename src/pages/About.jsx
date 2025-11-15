import {Link} from 'react-router-dom'

const About = () => {

    const aboutItems = [
        {id: 0, title: 'Meu perfil'},
        {id: 1, title: 'Meu projeto'},
        {id: 2, title: 'Meu time'},
    ]

    return (
        <div>
            <h1>Descrição</h1>
            <ul>
                {aboutItems.map((item) => (
                    <li key={item.id}>
                        <Link to={`/about/${item.id}`}>
                            <h2>{item.title}</h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default About