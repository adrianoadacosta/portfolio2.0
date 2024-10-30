import styles from './Info.module.css';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

import ToolsList from '../../components/ToolsList';
import projects from '../../data/projects';

const Info = () => {
  const { id } = useParams(); // Obtém o ID da URL
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  }

  const openLink = (url) => {
    window.open(url, '_blank');
  };

  const project = 
    projects.fullStack.find(p => p.id === parseInt(id)) ||
    projects.backEnd.find(p => p.id === parseInt(id)) ||
    projects.frontEnd.find(p => p.id === parseInt(id));

  if (!project) {
    return <h2>Projeto não encontrado!</h2>; // Para lidar com IDs inválidos
  }

  return (
    <div className={styles.container}>
       <button onClick={handleBackClick} className="back-button">
       <FaArrowLeft className="back-icon" /> 
       Voltar</button>       
                
      <h1>{project.title}</h1>
      <p className={styles.infoP}>{project.description}</p>

      {/* array das imagens */}
      <div className={styles.imageGallery}>
        {project.images && project.images.map((image, index) => (
          <img key={index} src={image} alt={`Imagem do projeto ${project.title}`} className={styles.projectImage} />
        ))}
      </div>

        {/* se tiver video mostra se não segue */}
        {project.video && 
        <video src={project.video} controls></video>
      }

      <div className={styles.linksContainer}>
        {/* links externos */}
        <a onClick={() => openLink(project.git)} className={styles.links}>
          Código no GitHub</a>
        {project.deploy && 
        <a onClick={() => openLink(project.deploy)} className={styles.links}>
          Deploy do projeto</a>
        }
      </div>     
    
      {/* array das ferramentas */}
      <p className={styles.infoP}>Ferramentas usadas:</p>
      <div className={styles.toolsContainer}>
        {project.tools && <ToolsList tools={project.tools} />}
      </div>

      {/* array das tags */}
      <div className={styles.tags}>
        {project.tags && project.tags.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </div>
    </div>
  );
}

export default Info;
