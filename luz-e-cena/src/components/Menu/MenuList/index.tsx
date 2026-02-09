import React from 'react';
import sytles from './MenuList.module.css';

const MenuList = ({children}: React.HTMLAttributes<HTMLUListElement> ) => {
  return (
    <nav>
        <ul className={sytles.navegacao}>{children}</ul>
    </nav>
  )
}

export default MenuList;