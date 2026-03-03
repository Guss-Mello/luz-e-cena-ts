import { useState } from 'react';
import Button from '../../Button';
import { HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi';
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const HeaderActions = () => {
  
  const [isDarkMode, setIsDarkMode] = useState(true);


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div>
        <Button variant="icon">
            <HiOutlineShoppingCart />
        </Button>
                <Button variant="icon">
            <HiOutlineUser />
        </Button>
        <Button variant="icon" onClick={toggleDarkMode}>
          {isDarkMode ? <MdDarkMode /> : <MdOutlineDarkMode />}
        </Button>
    </div>
  )
}

export default HeaderActions;