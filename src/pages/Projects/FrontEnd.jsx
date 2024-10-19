import styles from '../Projects/Projects.module.css'

import { Link } from 'react-router-dom';
import projects from '../../data/projects'

const FrontEnd = () => {
   return (
    <div className={styles.container}>
      <h1 className={styles.titles}>Projetos Front-End</h1>
      <div className={styles.cardContainer}>
        {projects.frontEnd.map((project) => (
          <div key={project.id}  className={styles.card}>
            <h2 className={styles.titles}>{project.title}</h2>
            <img src={project.cover} alt={project.title} className={styles.coverImage}/>
            <Link to={`/projects/${project.id}/info`} className={styles.detailsButton}>Detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FrontEnd