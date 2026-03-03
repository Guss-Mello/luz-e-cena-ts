import styles from "./Footer.module.css";

const FooterInfo = () => {
  return (
    <div className={styles.funcionamento}>
        <h4 className={styles.titulo}>Funcionamento</h4>
        <span>Segunda a Sexta - 16h às 00h</span>
        <span>ola@luzecena.com.br</span>
        <span>(11) 99999-9999</span>
    </div>
  )
}

export default FooterInfo;