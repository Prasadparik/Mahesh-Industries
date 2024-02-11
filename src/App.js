import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Statistics from "./components/Statistics";
import About from "./components/About";
import Products from "./components/Products";
import Footer from "./components/Footer";
// import WhatsApp from "./components/UI/WhatsApp";

function App() {
  return (
    <>
      {/* <WhatsApp /> */}
      <Navbar />
      <Banner />

      <Container>
        <About />
        <Statistics />
        <Products />
      </Container>
      <Footer />
    </>
  );
}

export default App;
