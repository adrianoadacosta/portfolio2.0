import styles from './Contact.module.css'

const Contact = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactImage}>
        <figure>
        <img src="img/imagemContato.jpg" alt="Imagem de contato" />
        <p>Imagem de <a href="https://img.freepik.com/vetores-gratis/homem-bonito-que-trabalha-no-portatil-ilustracao-do-icone-do-vetor-dos-desenhos-animados-pessoas-conceito-de-icone-de-tecnologia-isolado_138676-9123.jpg?t=st=1727455856~exp=1727459456~hmac=14dc49c7db40f56192a523c36d79a3005cbf7730948a2afe69fee68b7b5dd1df&w=740" target="_blank">br.freepik</a> usada com permissão. Todos os direitos reservados ao autor.</p>
        </figure>       
      </div>
      <div className={styles.contactInfo}>
        <div>           
          <p>WhatsApp
            <span><img src="img/midia/icons8-whatsapp.svg" alt="WhatsApp" className={styles.icon} /></span> 
          </p> 
          <button onClick={() => openLink('https://wa.me/5551986248474?text=Ol%C3%A1+meu+nome+%C3%A9+Adriano+e+irei+responder+a+mensagem+assim+que+poss%C3%ADvel')}>Enviar mensagem</button>
        </div>
        <div>
          <p>Email
          <span><img src="img/midia/icons8-e-mail-32.png" alt="Email" className={styles.icon} /></span> 
          </p>
          <button onClick={() => openLink('mailto:adrianoadacosta@outlook.com')}>Enviar email</button>
        </div>
        <div>
          <p>GitHub
          <span><img src="img/midia/icons8-github.svg" alt="GitHub" className={styles.icon} /></span> 
          </p>
          <button onClick={() => openLink('https://github.com/adrianoadacosta')}>Acessar GitHub</button>
        </div>
        <div>
          <p>LinkedIn
          <span><img src="img/midia/icons8-linkedin.svg" alt="LinkedIn" className={styles.icon} /></span> 
          </p>
          <button onClick={() => openLink('https://linkedin.com/in/adriano-costa-987999119')}>
            Acessar LinkedIn</button>
        </div>
        <div>
          <p>Telegram
          <span><img src="img/midia/icons8-telegram-logo.svg" alt="Telegram" className={styles.icon} /></span> 
          </p>
          <button onClick={() => openLink('https://t.me/Adrianoadacosta')}>
            Enviar mensagem</button>
        </div>
        <div>
          <p>Discord
          <span><img src="img/midia/icons8-logo-discord.svg" alt="Discord" className={styles.icon} /></span> 
          </p>
          <button onClick={() => openLink('https://discord.gg/CtYvu4YuVU')}>Acessar Discord</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;