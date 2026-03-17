import Logo from "../Logo";
import styles from "./Footer.module.css";
import useDarkMode from "../../hooks/useDarkMode";

const FooterLogo = () => {

  const {mounted, resolvedTheme} = useDarkMode();

  return (
    <div className={styles.logo}>
        <Logo src={mounted && resolvedTheme === 'dark' ? "../Logo_Favicon/Logo.png" : "../Logo_Favicon/Logo_azul.png"} alt="Logo"/>
        <p>Onde a realidade encontra a fantasia!</p>
    </div>
  )
}

export default FooterLogo;