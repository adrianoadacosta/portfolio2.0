import styles from '../Projects/Projects.module.css'

import { Link } from 'react-router-dom';
import projects from '../../data/projects'

const BackEnd = () => {
   return (
    <div className={styles.container}>
      <h1 className={styles.titles}>Projetos Back-End</h1>
      <div className={styles.cardContainer}>
        {projects.backEnd.map((project) => (
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
export default BackEnd