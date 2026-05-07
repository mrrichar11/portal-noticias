import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TransporteParana from "./pages/TransporteParana";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/noticia/transporte-parana"
          element={<TransporteParana />}
        />
      </Routes>
    </BrowserRouter>
  );
}