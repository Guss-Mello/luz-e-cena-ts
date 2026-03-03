import styles from "./Newsletter.module.css";
import Button from "../Button";
import FieldSet from "../FieldSet";
import InputText from "../InputText";

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <h2 className={styles.titulo}>Inscreva-se para ficar por dentro das novidades!</h2>
      <form className={styles.form}>
        <FieldSet>
            <InputText placeholder="Digite o seu email!"/>
        </FieldSet>
        <Button type="submit" variant="default">
            Inscreva-se
        </Button>
      </form>
    </section>
  )
}

export default Newsletter;