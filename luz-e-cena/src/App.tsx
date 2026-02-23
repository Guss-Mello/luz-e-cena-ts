import Banner from "./components/Banner"
import Header from "./components/Header";
import Link from "./components/Link";
import MovieSection from "./components/MovieSection";

function App() {
  return (
    <>
    <Header />
    <Banner src="./Imagens/Banner_principal/Banner_principal_desktop.png" alt="Banner"/>
    <MovieSection />
    <Link href="/" target="_blank">Link</Link>
    </>
  );
}

export default App
