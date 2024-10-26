import { useMemo } from 'react';
import { useQuery } from './useQuery'; // Ajuste o caminho conforme necessário

export const useSearchProjects = (projects) => {
    const query = useQuery();
    const searchTerm = query.get('q') || ''; // Obtém o parâmetro de busca

    const filteredProjects = useMemo(() => {
        const term = searchTerm.toLowerCase();
        return {
            fullStack: projects.fullStack.filter(project =>
                project.title.toLowerCase().includes(term) || 
                project.tags.some(tag => tag.toLowerCase().includes(term))
            ),
            backEnd: projects.backEnd.filter(project =>
                project.title.toLowerCase().includes(term) || 
                project.tags.some(tag => tag.toLowerCase().includes(term))
            ),
            frontEnd: projects.frontEnd.filter(project =>
                project.title.toLowerCase().includes(term) || 
                project.tags.some(tag => tag.toLowerCase().includes(term))
            ),
            
        };
    }, [projects, searchTerm]);

    return { filteredProjects, searchTerm };
};