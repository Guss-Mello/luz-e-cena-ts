import Link from '../Link';
import styles from './Footer.module.css';

const FooterInstitucional = () => {
  return (
    <div className={styles.institucional}>
        <h4 className={styles.titulo}>Institucional</h4>
        <Link className={styles.ancora} href='#'>Sobre nós</Link>
        <Link className={styles.ancora} href='#'>Para Empresas</Link>
        <Link className={styles.ancora} href='#'>Club Fidelidade</Link>
    </div>
  )
}

export default FooterInstitucional;