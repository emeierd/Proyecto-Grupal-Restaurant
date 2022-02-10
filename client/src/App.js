import "./styles/css/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./views/NotFound";
import Home from "./views/Home";
import Reservations from "./views/Reservations";
import Parties from "./views/Parties";
import Drinks from "./components/Drinks";
import MenuView from "./views/Menu";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="reservas" element={<Reservations />} />
          <Route path="fiestas" element={<Parties />} />
          <Route path="menu" element={<MenuView />} />
          <Route path="tragos" element={<Drinks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
