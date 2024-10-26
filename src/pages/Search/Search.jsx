import styles from '../Projects/Projects.module.css';
import { useSearchProjects } from "../../hooks/useSearchProjects";
import projects from '../../data/projects';
import { Link } from 'react-router-dom';

const Search = () => {
    const { filteredProjects, searchTerm } = useSearchProjects(projects);

    return (
        <div className={styles.container}>
            <h2 className={styles.titles}>Resultados da Busca para: {searchTerm}</h2>

            <div className={styles.cardContainer}>
                {Object.entries(filteredProjects).map(([_category, projects]) => 
                    projects.map((project) => (
                        <div key={project.id} className={styles.card}>
                            <h2 className={styles.titles}>{project.title}</h2>
                            <img src={project.cover} alt={project.title} className={styles.coverImage} />
                            <Link to={`/projects/${project.id}/info`} className={styles.detailsButton}>
                                Detalhes
                            </Link>
                        </div>
                    ))
                )}                
                {Object.values(filteredProjects).every((projects) => projects.length === 0) && (
                    <p className={styles.titles_p}>Nenhum projeto encontrado.</p>
                )}
            </div>
        </div>
    );
};

export default Search;
