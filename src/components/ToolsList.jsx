import PropTypes from 'prop-types';
import Tool from './Tool'; // Importa o componente Tool
import styles from './ToolsList.module.css'; // Importa o CSS para estilização

const ToolsList = ({ tools }) => {
    return (
        <div className={styles.toolsContainer}>
            {tools.map((tool, index) => (
                <Tool key={index} name={tool.name} icon={tool.icon} />
            ))}
        </div>
    );
};

// Validação de props
ToolsList.propTypes = {
    tools: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ToolsList;
