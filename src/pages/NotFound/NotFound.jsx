import styles from './NotFound.module.css'

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
    const navigate = useNavigate();

     useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/'); // Redireciona para a home
        },7000); // Espera 5 segundos antes de redirecionar  

        return () => clearTimeout(timer); // Limpa o timer ao desmontar
    }, [navigate]); 

  return (
    <div className={styles.notFound}>
        <img src="https://http.dog/[404].jpg" alt="imagem não encontrado" />
        <h1>Página Não Encontrada</h1>
        <p>Desculpe, a página que você está procurando não existe.</p>
        <p>Você será redirecionado para a página inicial.</p>
    </div>
  )
}

export default NotFound