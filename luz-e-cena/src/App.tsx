import Banner from "./components/Banner"
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>
    <Header />
    <Banner src="./Imagens/Banner_principal/Banner_principal_desktop.png" alt="Banner"/>
    <MovieSection />
    <Banner src="./Imagens/Banner_combo/Banner_combo_desktop.png" alt="Combo"/>
    <Newsletter />
    </>
  );
}

export default App
