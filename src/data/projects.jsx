import tools from './tools';
// imports fullstack
// cinesync
import cineCover from '../assets/img/Fullstack/CineSync/cinesyncCover.png'
import cineVideo from '../assets/img/Fullstack/CineSync/cinevideo.mp4'
// job finder
import jobCover from '../assets/img/Fullstack/Job-finder/jobFinderCover.png'
import jobVideo from '../assets/img/Fullstack/Job-finder/jobFinder.mp4'
// miniblog
import blogCover from '../assets/img/Fullstack/miniblog/miniblog_inicial.png'
import blog1 from '../assets/img/Fullstack/miniblog/miniblog_create_post.png'
import blog2 from '../assets/img/Fullstack/miniblog/miniblog_dashboard_delete.png'

// imports back end
// xadrez
import xadrezTab from '../assets/img/Back/xadrez/tabulheiro.png'
import xadrezMov from '../assets/img/Back/xadrez/movimento_peças.png'
import xadrezDes from '../assets/img/Back/xadrez/chess-system-design.png'
// sbjpa
import jpaLogica from '../assets/img/Back/SBJPA/Logical_layers.png'
import jpaInst from '../assets/img/Back/SBJPA/Domain_instance.png'
import jpaModel from '../assets/img/Back/SBJPA/Domain_model.png'
// mongo
import mongoCover from '../assets/img/Back/mongo/mongodbcover-1.png'
import mongo1 from '../assets/img/Back/mongo/mongodb1-1.png'
import mongo2 from '../assets/img/Back/mongo/mongodb2-1.png'
import mongo3 from '../assets/img/Back/mongo/mongodb3-1.png'
// votação
import votoCover from '../assets/img/Back/SessãoVotação/votoCover.png'
import voto1 from '../assets/img/Back/SessãoVotação/voto1.png'
import voto2 from '../assets/img/Back/SessãoVotação/voto2.png'
import voto3 from '../assets/img/Back/SessãoVotação/voto3.png'
// trilha back
import trilhaCover from '../assets/img/Back/trilhaBack/cover.png'
import trilhaAutenticacao from '../assets/img/Back/trilhaBack/autenticacao.png'
import trilhaAutorizado from '../assets/img/Back/trilhaBack/autorizado.png'
import trilhaInicial from '../assets/img/Back/trilhaBack/inicial.png'
import trilhaToken from '../assets/img/Back/trilhaBack/token.png'
import trilhaUsuarioOk from '../assets/img/Back/trilhaBack/usuariook.png'
// controle acesso
import cadastro1 from '../assets/img/Back/cadastro/cadastro1.png'
import cadastro2 from '../assets/img/Back/cadastro/cadastro12.png'
import cadastro3 from '../assets/img/Back/cadastro/cadastro123.png'
// Função para buscar ferramenta por nome
const findTool = (toolName) => {
    return tools.find(tool => tool.name === toolName);
  };

const fullStack = [
    {
        id: 1,
        title: "CineSync",
        description: "Aplicação React com integração da API do TMDB, navegação dinâmica e busca avançada.",
        cover: cineCover,
        tools: [
            findTool('JavaScript'),
            findTool('HTML'),
            findTool('CSS'),
            findTool('React'),
        ],
        video: cineVideo,
        git: 'https://github.com/adrianoadacosta/CineSync',
        tags:['React', 'API', 'TMDB', 'Hooks', 'Vite', 'Fullstack'],
    },
    {
        id: 2,
        title: "Job Finder",
        description: "Aplicação de busca de empregos para desenvolvedores, com rotas dinâmicas e interação com banco de dados.",
        cover: jobCover,
        tools: [
            findTool('JavaScript'),
            findTool('HTML'),
            findTool('CSS'),
            findTool('Bootstrap'),
            findTool('Nodejs'),
            findTool('Sequelize'),
            findTool('Handlebars'),
            findTool('Express'),
            findTool('SQLite'), 
        ],
        video: jobVideo,
        git:'https://github.com/adrianoadacosta/Job_finder',
        tags:['React', 'API', 'TMDB', 'Hooks', 'Vite', 'Fullstack'],
    },
    {
        id: 14,
        title: "Miniblog",
        description: "Aplicação de blog com autenticação de usuário e integração com Firebase. A dashboard permite ver, deletar e editar posts, e partes do menu são visíveis apenas para usuários cadastrados.",
        cover: blogCover,
        images:[ blogCover, blog1, blog2 ],
        tools: [
            findTool('React'),
            findTool('Firebase'),
            findTool('JavaScript'),
            findTool('HTML'),
            findTool('CSS'),            
        ],
        git:'https://github.com/adrianoadacosta/miniBlog',
        deploy:'https://adrianoadacostaminiblog.vercel.app/',
        tags:['React', 'Firebase', 'Autenticação', 'Dashboard', 'Vite', 'CRUD', 'Fullstack'],
    },
];

const backEnd = [
    {
        id: 3,
        title: "Xadrez em Java",
        description: "Implementação do jogo de xadrez jogado no terminal com tratamento de exceções e lógica avançada.",
        cover: xadrezTab,
        images:[ xadrezTab, xadrezMov, xadrezDes ],
        tools: [findTool('Java')],
        git:'https://github.com/adrianoadacosta/Jogo_xadrez_Java',
        tags:['Java', 'Terminal', 'Jogo', 'Polimorfismo', 'backEnd'],
    },
    {
        id: 4,
        title: "Workshop Spring Boot 3 JPA",
        description: "Aplicação Spring Boot com operações CRUD e banco de dados H2.",
        cover: jpaLogica,
        images:[ jpaLogica, jpaInst, jpaModel],
        tools: [
            findTool('Java'),
            findTool('SpringBoot'),
        ],
        git:'https://github.com/adrianoadacosta/workshop-springboot3-jpa',
        tags:['Java', 'Spring Boot', 'JPA', 'Hibernate', 'CRUD', 'backEnd'],
    },
    {
        id: 5,
        title: "Projeto MongoDB com Spring",
        description: "CRUD usando MongoDB e Spring Boot, explorando a diferença entre bancos de dados NoSQL e relacionais.",
        cover: mongoCover,
        images:[ mongo1, mongo2, mongo3],
        tools: [
            findTool('Java'),
            findTool('SpringBoot'),
            findTool('MongoDB'),
        ],
        git:'https://github.com/adrianoadacosta/Projeto-MongoDB-com-Spring-Boot',
        tags:['Java', 'Spring Boot', 'MongoDB', 'CRUD', 'NoSQL', 'backEnd'],
    },
    {
        id: 6,
        title: "Sessão Votação",
        description: "Projeto de um sistema em backend com a criação de sessões de votação aonde o associado so pode votar uma vez e os votos sao sim ou não, mostrando o resultado final. Projeto em Java, Spring Boot e Swagger",
        cover: votoCover,
        images:[ voto1, voto2, voto3 ],
        tools: [
            findTool('Java'),
            findTool('SpringBoot'),
            findTool('Swagger'),
        ],
        git:'https://github.com/adrianoadacosta/Sess-o_de_Vota-o',
        tags:['Java', 'Spring Boot', 'Swagger', 'API', 'Votação', 'backEnd'],
    },
    {
        id: 7,
        title: "Trilha Backend Jr",
        description: "API RESTful para gerenciamento de tarefas com autenticação de usuários.",
        cover: trilhaCover,
        images:[ trilhaInicial, trilhaUsuarioOk, trilhaToken, trilhaAutenticacao, 
            trilhaAutorizado ],
        tools: [
            findTool('JavaScript'),
            findTool('Express'),
            findTool('Sequelize'),
            findTool('Swagger'),
            findTool('Nodejs'),
            findTool('Postman'),
        ],
        git:'https://github.com/adrianoadacosta/TrilhaBackEndJR-JUN15/tree/master',
        tags:['JavaScript', 'Express', 'CRUD', 'Sequelize', 'API', 'Autenticação', 'Swagger', 'Nodejs', 'Postman', 'backEnd'],
    },    
    {
        id: 15,
        title: "Controle de Acesso com Spring Security",
        description: "Implementação de um sistema de controle de acesso robusto com Spring Security e banco de dados H2. Inclui autenticação via Security Filter Chain, rotas protegidas, roles e permissões, criptografia de senhas e testes com Postman.",
        cover: cadastro1,
        images:[ cadastro1, cadastro2, cadastro3],
        tools: [
            findTool('Java'),
            findTool('SpringBoot'),
            findTool('Postman'),
        ],
        git:'https://github.com/adrianoadacosta/controle-acesso-spring-security',
        tags:['Java', 'SpringBoot', 'Spring Security', 'H2', 'Autenticação', 'Autorização', 'Segurança', 'Postman', 'backEnd'],
    },    
];

const frontEnd = [
    {
        id: 8,
        title: "Jogo da Memória CDZ",
        description: 'Jogo da memória com cartas personalizadas dos Cavaleiros do Zodíaco.',
        cover:'/img/Front/jogoMemoriaCDZ/pgjogo.png',
        images:[
            '/img/Front/jogoMemoriaCDZ/pginicial.png',
            '/img/Front/jogoMemoriaCDZ/pgjogo.png',
            '/img/Front/jogoMemoriaCDZ/jogando.png',
        ],
        tools: [
            findTool('JavaScript'),
            findTool('HTML'),
            findTool('CSS'),
        ],
        git:'https://github.com/adrianoadacosta/jogo-da-memoria-CDZ',
        deploy:'https://adrianoadacosta.github.io/jogo-da-memoria-CDZ/',
        tags:['HTML', 'CSS', 'JavaScript', 'Jogo', 'Anime', 'frontEnd'],
    },
    {
        id: 9,
        title: "Quizz",
        description: 'Quiz com perguntas aleatórias sobre temas escolhidos e cálculo de pontuação.',
        cover:'/img/Front/Quizz/inicial.png',
        images:[
            '/img/Front/Quizz/inicial.png',
            '/img/Front/Quizz/pergunta.png',
            '/img/Front/Quizz/final.png',
        ],
        tools: [
            findTool('JavaScript'),
            findTool('HTML'),
            findTool('CSS'),
        ],
        git:'https://github.com/adrianoadacosta/Quizz',
        deploy:'https://adrianoadacosta.github.io/Quizz/',
        tags:['HTML', 'CSS', 'JavaScript', 'Jogo', 'Quiz', 'frontEnd'],
    },
    {
        id: 10,
        title: "Cronômetro em js",
        description: 'Cronômetro interativo baseado em um tutorial do professor Matheus Battisti.',
        cover:'/img/Front/cronometro/Cron1.png',
        images:[
            '/img/Front/cronometro/Cron1.png',
            '/img/Front/cronometro/Cron2.png',
            '/img/Front/cronometro/Cron3.png',
        ],
        tools: [
            findTool('JavaScript'),
            findTool('HTML'),
            findTool('CSS'),
        ],
        git:'https://github.com/adrianoadacosta/Cronometro.js',
        tags:['HTML', 'CSS', 'JavaScript' , 'frontEnd'],
    },
    {
        id: 11,
        title: "Orlando City Website",
        description: 'Site responsivo para o time de futebol Orlando City, com layout moderno.',
        cover:'/img/Front/orlando/Orlando-City-pc.png',
        images:[
            '/img/Front/orlando/Orlando-City-pc.png',
            '/img/Front/orlando/mobileOrlando.png',
            '/img/Front/orlando/menuMobileOrlando.png',
        ],
        tools: [
            findTool('JavaScript'),
            findTool('HTML'),
            findTool('CSS'),
            findTool('Bootstrap'),
            findTool('Jquery'),
        ],
        git:'https://github.com/adrianoadacosta/Orlando-City-website',
        tags:['HTML', 'CSS', 'Bootstrap', 'jQuery', 'Responsivo', 'Design', 'frontEnd'],
    },
    {
        id: 12,
        title: "Jogo da Velha",
        description: 'Jogo da Velha com interface interativa, jogabilidade multiplayer e contra IA.',
        cover:'/img/Front/Jogo da velha JS/jogo da velha.png',
        images:[
            '/img/Front/Jogo da velha JS/tela inicial jogo da velha.png',
            '/img/Front/Jogo da velha JS/jogo da velha.png',
            '/img/Front/Jogo da velha JS/msg vitoria jogo da velha.png',
        ],
        tools: [
            findTool('JavaScript'),
            findTool('HTML'),
            findTool('CSS'),
        ],
        git:'https://github.com/adrianoadacosta/JogoDaVelhaJS',
        tags:['HTML', 'CSS', 'JavaScript', 'Jogo', 'frontEnd'],
    },
    {
        id: 13,
        title: "To Do List",
        description: 'Lista de tarefas simples e interativa.',
        cover:'/img/Front/todolist/to do list check.png',
        images:[
            '/img/Front/todolist/todo list inicial.png',
            '/img/Front/todolist/to do list itens.png',
            '/img/Front/todolist/to do list check.png',
            '/img/Front/todolist/to do list mobile.png',
        ],
        tools: [
            findTool('JavaScript'),
            findTool('HTML'),
            findTool('CSS'),
        ],
        git:'https://github.com/adrianoadacosta/To-Do-List_JS',
        tags:['HTML', 'CSS', 'JavaScript', 'Tarefas', 'Responsivo', 'frontEnd'],
    },
];

export default {fullStack, backEnd, frontEnd};

// ../../public/img/