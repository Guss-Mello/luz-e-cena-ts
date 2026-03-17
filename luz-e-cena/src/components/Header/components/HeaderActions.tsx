import Button from '../../Button';
import { HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi';
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import useDarkMode from '../../../hooks/useDarkMode';

const HeaderActions = () => {

    const {isDarkMode, setTheme} = useDarkMode();
  
    return (
        <div>
            <Button variant="icon">
                {isDarkMode ? <HiOutlineShoppingCart color='#f0f0f0'/> : <HiOutlineShoppingCart color='#000000'/>}
            </Button>
            <Button variant="icon">
                {isDarkMode ? <HiOutlineUser color='#f0f0f0'/> : <HiOutlineUser color='#000000'/>}
            </Button>
            <Button variant="icon" onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}>
                {isDarkMode ? <MdOutlineLightMode color='#f0f0f0'/> : <MdDarkMode color='#000000'/>}
            </Button>
        </div>
    )
}

export default HeaderActions;