import Logo from "../Logo";
import HeaderActions from "./components/HeaderActions";
import HeaderFormFilters from "./components/HeaderFormFilters";
import HeaderLinks from "./components/HeaderLinks";
import HeaderList from "./components/HeaderList";
import HeaderListItem from "./components/HeaderListItem";
import useDarkMode from "../../hooks/useDarkMode";

const Header = () => {
  const {mounted, resolvedTheme} = useDarkMode();

  return (
    // Adicionamos uma classe para que o CSS do tema possa estilizá-lo
    <header className="main-header">
      <HeaderList>

        <HeaderListItem>
          <Logo src={mounted && resolvedTheme === 'dark' ? "../Logo_Favicon/Logo.png" : "../Logo_Favicon/Logo_azul.png"} />
        </HeaderListItem>

        <HeaderListItem>
          <HeaderLinks />
        </HeaderListItem>

        <HeaderListItem>
          <HeaderFormFilters />
        </HeaderListItem>

        <HeaderListItem>
          <HeaderActions />
        </HeaderListItem>

      </HeaderList>
    </header>
  )
}

export default Header;