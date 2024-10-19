// src/components/Tool.jsx

import PropTypes from 'prop-types';
import styles from './Tool.module.css'; 

const Tool = ({ name, icon }) => {
    return (
        <div className={styles.tool}>
            <img src={icon} alt={`${name} icon`} className={styles.icon} />
            {name && <span className={styles.name}>{name}</span>}
        </div>
    );
};

Tool.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.string.isRequired,
};

export default Tool;
