import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    return (

        <div>
            <Header/>

            <main className={"grid grid-cols-1 lg:grid-cols-10 gap-10 px-4 xl:px-60 py-15"}>
                <div className={"lg:col-start-2 lg:col-end-8 artigo"}>

                    <h1>Criptografia aplicada à Inteligência Artificial: protegendo dados e promovendo confiança
                        digital</h1>

                    <iframe src={"https://www.youtube.com/embed/o3uyflz_4Pw"} allow={"fullscreen"}></iframe>

                    <p>
                        Vivemos uma era em que a <b>Inteligência Artificial (IA)</b> avança rapidamente em diferentes
                        setores da
                        saúde à educação, da assistência social à administração pública. Com esse avanço, cresce
                        igualmente
                        o volume e a importância dos dados trafegados e processados por esses sistemas. Nesse cenário,
                        a <b>Criptografia</b> assume um papel central não apenas como técnica de segurança, mas como
                        alicerce
                        de
                        confiança e de impacto social positivo.
                    </p>

                    <p>
                        Visamos explorar <b>como a criptografia pode, e deve, ser aplicada em sistemas de IA</b>,
                        quais os desafios concretos no Brasil e de que modo isso pode gerar efeitos reais na comunidade,
                        garantindo inclusão, ética e proteção.
                    </p>




                    <img src={`${import.meta.env.BASE_URL}/imagem1.jpg`}/>

                    <h2>Por que a criptografia importa na IA</h2>
                    <h3> Proteção de dados e privacidade </h3>

                    <p>
                        Sistemas de IA dependem de grandes volumes de dados, muitos deles <b>pessoais, sensíveis ou
                        comunitários</b>. Sem proteção adequada, esses dados ficam vulneráveis a <b>vazamentos, usos
                        indevidos
                        ou manipulação</b>. A criptografia ajuda a garantir:
                    </p>

                    <ul>
                        <li><b>Confidencialidade:</b> apenas pessoas autorizadas acessam as informações;</li>

                        <li><b>Integridade:</b> os dados não são alterados sem detecção;</li>

                        <li><b>Autenticidade:</b> os dados vêm de uma fonte confiável.</li>
                    </ul>




                    <h3>Cenário brasileiro e desafios emergentes</h3>

                    <p>
                        No Brasil, há indícios de que o país ainda está se estruturando para garantir segurança robusta
                        em IA. Segundo o portal <u><a
                        href={"https://cryptoid.com.br/criptografia-identificacao-digital-id-biometria/brasil-podera-ficar-fora-do-desenvolvimento-de-ia-assegura-abes/"}
                        target={"_blank"}>Crypto
                        ID</a></u>, há risco de o Brasil <b>“ficar fora do desenvolvimento de IA”</b> se
                        a regulação não acompanhar o ritmo tecnológico.
                    </p>
                    <p>
                        Além disso, o <u><a
                        href="https://saojoaquimonline.com.br/destaque/2025/06/26/gov-br-implementa-criptografia-pos-quantica-em-2025-para-reforcar-seguranca-digital-entenda/"
                        target={"_blank"}>Gov.br</a></u> já
                        iniciou a adoção de
                        criptografia pós-quântica em seus serviços digitais, prevendo maior proteção para dados de
                        cidadãos.
                    </p>
                    <p>
                        Esses movimentos mostram que a interseção entre IA e criptografia precisa de atenção contínua no
                        país.
                    </p>



                    <h2>Como a criptografia se aplica em IA</h2>
                    <h3>1. Criptografia homomórfica</h3>

                    <p>
                        Permite que <b>dados criptografados sejam processados sem serem descriptografados</b>. Assim,
                        modelos
                        de IA podem operar sobre dados protegidos, mantendo a privacidade.
                    </p>
                    <p>
                        <u><a href="https://www.fatec.edu.br/revista/index.php/RTecFatecAM/article/view/415"
                              target={"_blank"}>Estudo da
                            FATEC</a></u> destaca essa aplicação em computação em nuvem com foco em privacidade de
                        dados.
                    </p>


                    <h3>2. Criptografia pós-quântica</h3>

                    <p>
                        Com a chegada da computação quântica, os métodos tradicionais podem se tornar vulneráveis. O
                        Brasil, por meio de iniciativas governamentais, já começou a adaptar suas infraestruturas
                        digitais. <u><a
                        href="https://saojoaquimonline.com.br/destaque/2025/06/26/gov-br-implementa-criptografia-pos-quantica-em-2025-para-reforcar-seguranca-digital-entenda/"
                        target={"_blank"}>São
                        Joaquim Online</a></u> destaca que o Gov.br implementará criptografia pós-quântica em
                        2025,
                        reforçando a segurança digital nacional.
                    </p>


                    <h3>3. IA e criptografia para segurança de dados</h3>

                    <p>
                        A IA pode <b>detectar padrões suspeitos</b> de acesso ou comportamento anômalo, enquanto a
                        criptografia
                        <b> impede que dados sejam lidos mesmo em casos de
                            invasão</b>. <u><a
                        href="https://canaltech.co/uso-de-inteligencia-artificial-para-a-criptografia-de-dados-em-aplicativos/"
                        target={"_blank"}>Canaltech</a></u> descreve
                        o uso combinado dessas tecnologias em aplicativos modernos de segurança digital.
                    </p>


                    <h3>Exemplos de impacto social </h3>
                    <ul>
                        <li><b>Saúde:</b> IA analisando exames criptografados, garantindo sigilo médico.</li>

                        <li><b>Educação:</b> plataformas que personalizam ensino sem expor dados de alunos.</li>

                        <li><b>Serviços públicos:</b> programas de assistência social que preservam a privacidade de
                            beneficiários.
                        </li>
                    </ul>


                    <h2>Desafios, boas práticas e recomendações</h2>
                    <h3>Desafios</h3>

                    <ul>
                        <li>Falta de infraestrutura tecnológica;</li>

                        <li>Regulação em andamento (<u><a
                            href="https://journal.nuped.com.br/index.php/revista/article/view/1252" target={"_blank"}>International
                            Journal of Digital Law</a></u>);
                        </li>

                        <li>Necessidade de ética e transparência;</li>

                        <li>Pouca capacitação técnica em comunidades e órgãos públicos.</li>
                    </ul>



                    <h3>Boas práticas</h3>
                    <ul>

                        <li>Promover <b>auditorias regulares</b> e <b>transparência algorítmica</b>;</li>

                        <li>Estimular <b>educação digital</b> sobre privacidade nas comunidades.</li>
                    </ul>

                    <p>
                        <u><a href="https://revista.ibict.br/p2p/article/download/5993/5672/21844" target={"_blank"}>Revista
                            Ibict</a></u> destaca que a adoção de padrões criptográficos desde o início do projeto é
                        essencial para garantir a segurança.
                    </p>



                    <h3>Impacto real na comunidade</h3>

                    <p>Quando aplicadas juntas, IA e criptografia fortalecem:</p>
                    <ul>
                        <li>A <b>confiança dos cidadãos</b>;</li>

                        <li>A <b>inclusão digital</b>;</li>

                        <li>A <b>proteção de dados sensíveis</b>;</li>

                        <li>A <b>transparência pública e o engajamento social</b>.</li>
                    </ul>



                    <h2>Rumo à uma Inteligência Artificial confiável</h2>

                    <img src={`${import.meta.env.BASE_URL}/imagem2.jpg`}/>

                    <p>
                        A <b>criptografia aplicada à Inteligência Artificial</b> vai além da técnica — é uma estratégia de
                        confiança e cidadania digital. No Brasil, seu uso ético e responsável pode impulsionar uma
                        transformação digital mais segura, inclusiva e justa.
                        Integrar IA e criptografia é garantir que a inovação tecnológica beneficie todos, respeitando a
                        privacidade, os direitos e a dignidade das pessoas.
                    </p>

                </div>
                <div className={" lg:col-start-8 lg:col-end-10"}>

                    <input type={"text"} className={"pesquisa"} placeholder={"Pesquisar..."}></input>

                    <img src={`${import.meta.env.BASE_URL}/anuncio2.gif`}/>

                </div>
            </main>
            <Footer/>
        </div>

    )
}

export default App
