import Link from '../Link';
import styles from './Footer.module.css';
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";

const FooterSocial = () => {
  return (
    <div className={styles.redes}>
        <h4 className={styles.titulo}>Siga nossas redes:</h4>
        <div className={styles.icones}>
          <Link className={styles.icone} href='#'><FaInstagram size={24} /></Link>
          <Link className={styles.icone} href='#'><FaTiktok size={24} /></Link>
          <Link className={styles.icone} href='#'><FaWhatsapp size={24} /></Link>
        </div>
    </div>
  )
}

export default FooterSocial;