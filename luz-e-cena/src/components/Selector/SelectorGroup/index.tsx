import React from 'react';
import styles from './SelectorGroup.module.css';

// Definindo a interface para as props do componente (interface e quase igual a type)
//Ela é usada principalmente para definir contratos para objetos, ou seja, especificar quais propriedades e métodos um objeto deve ter.
// Uma classe/objeto que implementa uma interface deve ter todos os campos e métodos (tirando os que você explicitamente declara como opcionais). 
// Portanto, nós os usamos para verificação de tipo.
interface SelectorGroup extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon?: React.ReactNode;
}

const SelectorGroup = ({ children, icon, ...rest }: SelectorGroup) => {
  return (
    <div className={styles.container}>
        {/* Se tiver icone ele cria essa div de icone */}
        {icon && <div className={styles.icon}>{icon}</div>}
        <select className={styles.selector} {...rest}>
            {children}
        </select>
    </div>
  );
};

export default SelectorGroup;