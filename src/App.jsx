import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import TransporteParana from "./pages/TransporteParana";
import OroVerde from "./pages/OroVerde";
import QuiniGanadores from "./pages/QuiniGanadores";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/noticia/transporte-parana"
          element={<TransporteParana />}
        />

        <Route
          path="/noticia/oro-verde-parque-ambiental"
          element={<OroVerde />}
        />

        <Route
          path="/noticia/quini-ganadores-entre-rios"
          element={<QuiniGanadores />}
        />

      </Routes>
    </BrowserRouter>
  );
}