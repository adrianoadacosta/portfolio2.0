import styles from './Footer.module.css';

const Footer = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

    return (
      <footer className={styles.footer}>
        <section className={styles.socialMidia}>
          <a onClick={() => openLink('https://wa.me/5551986248474?text=Ol%C3%A1+meu+nome+%C3%A9+Adriano+e+irei+responder+a+mensagem+assim+que+poss%C3%ADvel')}>
          <img src="/img/midia/icons8-whatsapp.svg" alt="WhatsApp" className={styles.icon} />
          </a>
          <a onClick={() => openLink('mailto:adrianoadacosta@outlook.com')}>
          <img src="/img/midia/icons8-e-mail-32.png" alt="Email" className={styles.icon} />
          </a>
          <a onClick={() => openLink('https://github.com/adrianoadacosta')}>
          <img src="/img/midia/icons8-github.svg" alt="Github" className={styles.icon} />
          </a>
          <a onClick={() => openLink('https://linkedin.com/in/adriano-costa-987999119')}>
          <img src="/img/midia/icons8-linkedin.svg" alt="Linkedin" className={styles.icon} />
          </a>
          <a onClick={() => openLink('https://t.me/Adrianoadacosta')}>
          <img src="/img/midia/icons8-telegram-logo.svg" alt="Telegram" className={styles.icon} />
          </a>
          <a onClick={() => openLink('https://discord.gg/CtYvu4YuVU')}>
          <img src="/img/midia/icons8-logo-discord.svg" alt="Discord" className={styles.icon} />
          </a>          
        </section>
          <p>Desenvolvido por Adriano Costa &copy; 2024</p>
          <p>version 2.0</p>
      </footer>
    )
  }
  
  export default Footer