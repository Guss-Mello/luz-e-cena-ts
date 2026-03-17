import Banner from "./components/Banner"
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";
import Newsletter from "./components/Newsletter";
import ThemeProvider from "./providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Header />
      <Banner src="./Imagens/Banner_principal/Banner_principal_desktop.png" alt="Banner"/>
      <MovieSection />
      <Banner src="./Imagens/Banner_combo/Banner_combo_desktop.png" alt="Combo"/>
      <Newsletter />
      <Footer />
    </ThemeProvider>
  );
}

export default App
