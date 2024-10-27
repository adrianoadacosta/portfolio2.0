import styles from './About.module.css'
import rostoIMG from '../../assets/img/rosto.jpg'

import ToolsList from "../../components/ToolsList"
import tools from '../../data/tools'

const About = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };
  return (
    <div>
        <div className={styles.container}>
          <img src={rostoIMG} alt="Foto Adriano Costa" className={styles.foto}/>
            <div className={styles.textContainer}>
              <h1>Adriano Costa</h1>
              <h2>Desenvolvedor de Software</h2>
            </div>
        </div>
        <main>
          <section>
            <h3>Sobre mim</h3>
            <p>Olá, meu nome é Adriano. Sou casado com a Márcia e pai da Larissa.
						Desde sempre, minha paixão está na área de informática e tecnologia.
						Além disso, sou um grande entusiasta de filmes, séries e animes.
						Tenho um interesse especial em esportes, incluindo esportes americanos como a NFL, NBA, NHL e MBL. Adoro pesquisar e acompanhar as últimas novidades em tecnologia.</p>
          </section>
          <section>
          <h3>Formação</h3>
                <p>Comecei a faculdade de Análise e Desenvolvimento de Sistemas no
                SENAC em 2009. Após três semestres e algumas reviravoltas na vida,
                tive que interromper meus estudos, mas o desejo de retomar esse
                curso que sempre me atraiu nunca desapareceu. Finalmente, em 2022,
                consegui retornar e, com determinação, completei minha graduação na
                Faculdade Anhanguera</p>
                <p>Hoje formado em Análise e Desenvolvimento de Sistemas, cursando pós-graduação em Algoritmos, Lógica de Programação e Engenharia de Software.</p>
                <p>Atualmente, busco uma oportunidade como desenvolvedor para aplicar meus conhecimentos em Java, JavaScript, HTML, CSS, Spring Boot e React, adquiridos em projetos práticos e cursos complementares.</p>
          </section>
          <section>
          <h3>Cursos</h3>
          <p>Desde 2022, ano em que iniciei a faculdade, tenho realizado diversos
						cursos para me ajudar a me tornar um profissional melhor. Abaixo
						estão os cursos que completei até o momento e meus certificados de conslusão:</p>
          <ul>
          <li>
              JavaScript com Node.js
              <button onClick={() => openLink('https://www.udemy.com/certificate/UC-4c49ca5e-b5c9-4b25-8f80-3bcbe3cbdaba/')}>Ver Credencial</button>
            </li>
            <li>
              React com hooks, router, API
              <button onClick={() => openLink('https://www.udemy.com/certificate/UC-2c7aa9cd-c316-4df1-97be-795e78ce176e/')}>Ver Credencial</button>
            </li>
            <li>
              Java completo + programação orientada a objetos
              <button onClick={() => openLink('https://www.udemy.com/certificate/UC-bd4a10de-0028-4b17-8a3b-cb5db12ea204/')}>Ver Credencial</button>
            </li>
            <li>
              Spring Boot: JPA, REStFul API, Security,JWT
              <button onClick={() => openLink('https://www.udemy.com/certificate/UC-58abd39d-5a41-4b94-bf92-3210c0cf4a9f/')}>Ver Credencial</button>
            </li>
            <li>
             Desenvolvedor web (HTML / CSS)
              <button onClick={() => openLink('https://www.udemy.com/certificate/UC-2b5e067b-4c83-493a-b654-9390ce21f3b9/')}>Ver Credencial</button>
            </li>
            <li>
            Algoritmos e logica de programação em C
              <button onClick={() => openLink('https://www.udemy.com/certificate/UC-9cf85259-20b2-4649-b4ef-4b9b1b49eca6/')}>Ver Credencial</button>
            </li>
            <li>
              Testes Automáticos
              <button onClick={() => openLink('https://www.udemy.com/certificate/UC-fed46345-4acc-4542-b927-6a2a2c8253ed/')}>Ver Credencial</button>
            </li>
            <li>
              Chat GPT para desenvolvedores
              <button onClick={() => openLink('https://www.udemy.com/certificate/UC-bc855f45-828b-4df0-8007-2e92e8443a53/')}>Ver Credencial</button>
            </li>
          </ul>
          </section>          
        </main>
        <h3>Ferramentas utilizadas</h3>
        <ToolsList tools={tools} />
    </div>
  )
}

export default About