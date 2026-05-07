import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-100">
      
      <Header />

      <main className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <Link
            to="/noticia/transporte-parana"
            className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-[1.01] hover:shadow-2xl transition duration-300"
          >
            <div className="relative">
              
              <img
                src="/Reunion1.jpeg"
                alt="Conflicto transporte Paraná"
                className="w-full h-[420px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <span className="bg-red-700 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Política
                </span>

                <h2 className="text-3xl md:text-5xl font-black text-white mt-4 leading-tight">
                  CONTINÚA EL CONFLICTO EN EL TRANSPORTE URBANO DE PARANÁ
                </h2>
              </div>
            </div>

            <div className="p-6">
              <p className="text-zinc-600 text-lg leading-7">
                La UTA denuncia incumplimientos laborales mientras continúa el
                deterioro del servicio urbano que afecta a los vecinos de
                Paraná.
              </p>
            </div>
          </Link>

          <aside className="space-y-6">
            
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h3 className="text-xl font-black border-b pb-3 mb-4">
                Último momento
              </h3>

              <div className="space-y-5">
                
                <div>
                  <span className="text-red-700 font-bold text-sm uppercase">
                    Política
                  </span>

                  <p className="font-semibold mt-1 leading-6">
                    Usuarios reclaman mejoras urgentes en el sistema urbano.
                  </p>
                </div>

                <div>
                  <span className="text-red-700 font-bold text-sm uppercase">
                    Transporte
                  </span>

                  <p className="font-semibold mt-1 leading-6">
                    Continúan las audiencias por el conflicto laboral.
                  </p>
                </div>

                <div>
                  <span className="text-red-700 font-bold text-sm uppercase">
                    Paraná
                  </span>

                  <p className="font-semibold mt-1 leading-6">
                    El Municipio ratificó que no forma parte del conflicto.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 text-white rounded-3xl shadow-xl overflow-hidden">
              
              <img
                src="/Colectivo.jpeg"
                alt="Colectivo urbano"
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-black leading-tight">
                  Un servicio en crisis
                </h3>

                <p className="mt-4 text-zinc-300 leading-7">
                  El conflicto laboral se suma a las reiteradas críticas de los
                  usuarios por la frecuencia y el estado de las unidades.
                </p>
              </div>
            </div>
          </aside>
        </section>
      </main>

      <Footer />
    </div>
  );
}