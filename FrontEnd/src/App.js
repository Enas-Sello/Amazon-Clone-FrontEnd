import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import CartPage from "./pages/Cart/CartPage.jsx";
import "./index.css";
import ProHome from "./pages/ProHome";
import ProductDetails from "./pages/ProductDetails";
function App() {
  console.log("test");
  return (
    <Router>
      <div className="d-flex flex-column main">
        <Header />
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/CartPage" element={<CartPage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/" element={<ProHome />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
